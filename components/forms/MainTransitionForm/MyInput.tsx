import { Control, useController } from "react-hook-form";
import { XStack, Input, SizeTokens } from "tamagui";

type MyInputProps = {
  name: string;
  control: Control;
  size: SizeTokens;
};

export const MyInput = ({ name, control, size }: MyInputProps) => {
  const { field } = useController({ control, defaultValue: "", name });

  return (
    <XStack>
      <Input
        flex={1}
        size={size}
        value={field.value}
        onChangeText={field.onChange}
      />
    </XStack>
  );
};
