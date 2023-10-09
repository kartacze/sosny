import { Control, useController, useForm } from "react-hook-form";
import {
  XStack,
  Input,
  SizeTokens,
  Stack,
  Text,
  SizableText,
  Button,
} from "tamagui";
import { MySelect } from "../../select";
import { MyInput } from "./MyInput";

type MainTransitionFormProps = {};

const debitors = ["kieszen", "firma", "mBank"];

export const MainTransitionForm = ({}: MainTransitionFormProps) => {
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = () => {
    console.log("submit here");
  };

  return (
    <Stack>
      <Text>Please enter new transaction</Text>
      <SizableText theme="light_alt2" size="$5" mt="$2">
        Debitor
      </SizableText>
      <MySelect
        name="debitor"
        control={control}
        items={debitors}
        defaultValue={debitors[0]}
      />
      <SizableText theme="light_alt2" size="$5" mt="$2">
        Amount
      </SizableText>
      <MyInput control={control} name="amount" size="$4" />

      <XStack mt="$5" space="$4" justifyContent="center">
        <Button size="$4" theme="active" onPress={handleSubmit(onSubmit)}>
          dawaj
        </Button>
        <Button
          size="$4"
          theme="pink"
          onPress={() => {
            reset({
              debitor: debitors[0],
              amount: "",
            });
          }}
        >
          reset
        </Button>
      </XStack>
    </Stack>
  );
};
