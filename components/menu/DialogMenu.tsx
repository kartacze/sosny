import { User, X } from "@tamagui/lucide-icons";

import { Adapt, Button, Dialog, Sheet, Unspaced, XStack } from "tamagui";
import { useSession } from "../../ctx";

export function DialogInstance() {
  const { signOut } = useSession();

  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <Button icon={<User size="$1" />} />
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
                type: "slow",
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.7 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.75 }}
          gap="$4"
        >
          <XStack alignSelf="flex-end" gap="$4">
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
