import {
  Control,
  FieldValues,
  Path,
  PathValue,
  useController,
} from "react-hook-form";
import { XStack, YStack, Input, SizeTokens, Paragraph } from "tamagui";

type MyInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  size: SizeTokens;
  defaultValue?: PathValue<T, Path<T>>;
};

export function MyInput<T extends FieldValues>({
  name,
  control,
  size,
  defaultValue,
}: MyInputProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({ control, defaultValue, name });

  return (
    <YStack>
      <XStack>
        <Input
          flex={1}
          size={size}
          value={field.value}
          onChangeText={field.onChange}
        />
      </XStack>
      {error && (
        <Paragraph size="$2" fontWeight="800" color="red">
          {error.message}
        </Paragraph>
      )}
    </YStack>
  );
}
