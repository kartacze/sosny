import { X } from "@tamagui/lucide-icons";

import { useState } from "react";

import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Paragraph,
  Sheet,
  TooltipSimple,
  Unspaced,
  XStack,
} from "tamagui";
import { useSession } from "../../ctx";

export function DialogInstance() {
  const [open, setOpen] = useState(false);
  const { signOut } = useSession();

  return (
    <Dialog
      modal
      onOpenChange={(open) => {
        setOpen(open);
      }}
    >
      <Dialog.Trigger asChild>
        <Button>Show Dialog</Button>
      </Dialog.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet animation="medium" zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" gap="$4">
            <Adapt.Contents />
          </Sheet.Frame>

          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>
      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Dialog.Content
          bordered
          elevate
          key="content"
          animateOnly={["transform", "opacity"]}
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.7 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.75 }}
          gap="$4"
        >
          <Fieldset gap="$4" horizontal>
            <Label width={160} justifyContent="flex-end" htmlFor="username">
              <TooltipSimple
                label="Pick your favorite"
                placement="bottom-start"
              >
                <Paragraph>Food</Paragraph>
              </TooltipSimple>
            </Label>
          </Fieldset>
          <XStack alignSelf="flex-end" gap="$4">
            <DialogInstance />
            <Dialog.Close displayWhenAdapted asChild>
              <Button theme="alt1" aria-label="Close" onPress={signOut}>
                Log out
              </Button>
            </Dialog.Close>
          </XStack>
          <Unspaced>
            <Dialog.Close asChild>
              <Button
                position="absolute"
                top="$3"
                right="$3"
                size="$2"
                circular
                icon={X}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
