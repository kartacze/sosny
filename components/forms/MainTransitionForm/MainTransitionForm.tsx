import { SubmitErrorHandler, useForm } from "react-hook-form";
import { XStack, Stack, Text, SizableText, Button, Paragraph } from "tamagui";
import { MySelect } from "../../select";
import { MyInput } from "./MyInput";
import { effectResolver } from "../../../domain/resolvers/effectResolver/effectResolver";
import {
  TransactionForm,
  transactionSchema,
} from "../../../schemas/Transaction";
import { Wallet } from "../../../schemas/Wallet";

type MainTransitionFormProps = {
  debitors: Wallet[];
  creditors: Wallet[];
};

const debitors = ["kieszen", "firma", "mBank"];
const creditors = ["spozywczak", "ABC", "inne(default)"];

const defaultValues = {
  currency: "PLN",
  date: new Date().toISOString(),
};


export const MainTransitionForm = ({}: MainTransitionFormProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TransactionForm>({
    resolver: effectResolver(transactionSchema),
    defaultValues,
  });

  const onSubmit = () => {
    console.log("submit here", errors);
  };

  const onError: SubmitErrorHandler<TransactionForm> = (error) => {
    console.log("error here', ", error);
  };


  return (
    <Stack>
      <Text>Please enter new transaction</Text>
      <SizableText theme="light_alt2" size="$5" mt="$2">
        Debitor (kto)
      </SizableText>
      <MySelect
        name="debitor"
        control={control}
        items={debitors}
        defaultValue={debitors[0]}
      />
      <SizableText theme="light_alt2" size="$5" mt="$2">
        Creditor (komu)
      </SizableText>

      <MySelect
        name="creditor"
        control={control}
        items={creditors}
        defaultValue={creditors[0]}
      />
      <SizableText theme="light_alt2" size="$5" mt="$2">
        Amount
      </SizableText>
      <MyInput control={control} name="amount" size="$4" />

      <SizableText theme="light_alt2" size="$5" mt="$2">
        Optional Note
      </SizableText>
      <MyInput
        control={control}
        name="note"
        size="$4"
        placeholder="add some note here..."
      />

      <XStack mt="$5" space="$4" justifyContent="center">
        <Button
          size="$4"
          theme="active"
          onPress={handleSubmit(onSubmit, onError)}
          disabled={!isValid}
        >
          dawaj
        </Button>
        <Button
          size="$4"
          theme="pink"
          onPress={() => {
            reset({
              debitor: debitors[0],
              amount: "0",
              ...defaultValues,
            });
          }}
        >
          wyczyść
        </Button>
      </XStack>
      <XStack>
        {errors && (
          <Paragraph size="$2" fontWeight="800" color="red">
            Errors in form
          </Paragraph>
        )}
      </XStack>
    </Stack>
  );
};
