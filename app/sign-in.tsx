import { useEffect } from "react";
import { Redirect } from "expo-router";
import { XStack, YStack, Text, Button } from "tamagui";
import * as WebBrowser from "expo-web-browser";
import queryString from "query-string";

import { useSession } from "../ctx";
import * as Linking from "expo-linking";
import { isString } from "effect/Predicate";

const getCodeFromUrlString = (url: string) => {
  const parsed = queryString.parseUrl(url);

  return parsed.query?.code;
};

export default function SignIn() {
  const { signIn, session } = useSession();

  const triggerSignIn = async () => {
    const baseUrl = `${process.env.EXPO_PUBLIC_API_URL}/users/log_in`;
    const callbackUrl = Linking.createURL("App", { scheme: "myapp" });

    const response = await WebBrowser.openAuthSessionAsync(
      `${baseUrl}?redirect=${callbackUrl}`,
      callbackUrl,
    );

    if (response.type === "success") {
      const code = getCodeFromUrlString(response.url);
      if (code && isString(code)) {
        signIn(code);
      }
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    triggerSignIn();
  }, []);

  if (session) {
    return <Redirect href="/" />;
  }

  return (
    <YStack>
      <XStack>
        <Text>You should be redirected to signig screen</Text>
      </XStack>

      <XStack alignSelf="flex-end" gap="$4">
        <Button theme="alt1" aria-label="Close" onPress={triggerSignIn}>
          Log in
        </Button>
      </XStack>
    </YStack>
  );
}
