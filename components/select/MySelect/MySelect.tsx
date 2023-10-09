import { Control, useController } from "react-hook-form";
import { ChevronDown } from "@tamagui/lucide-icons";
import { Select, Adapt, Sheet } from "tamagui";

type MySelectProps = {
  defaultValue?: string;
  name: string;
  control: Control;
  items: string[];
};

export const MySelect = ({
  name,
  control,
  items,
  defaultValue = "",
}: MySelectProps) => {
  const { field } = useController({ control, defaultValue: "", name });

  return (
    <Select
      id={name}
      onValueChange={field.onChange}
      value={field.value}
      defaultValue={defaultValue}
      native
    >
      <Select.Trigger width={220} iconAfter={() => <ChevronDown />}>
        <Select.Value placeholder={defaultValue} />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet
          native
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: "spring",
            damping: 20,
            mass: 1.2,
            stiffness: 250,
          }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>

          <Sheet.Overlay
            animation="100ms"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>

      <Select.Content>
        <Select.Viewport>
          <Select.Group>
            <Select.Label>{name}</Select.Label>
            {items.map((item, i) => (
              <Select.Item index={i} key={item} value={item}>
                <Select.ItemText>{item}</Select.ItemText>
                <Select.ItemIndicator marginLeft="auto"></Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select>
  );
};
