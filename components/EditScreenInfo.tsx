import React from "react";
import { View, Text } from "tamagui";

import { ExternalLink } from "./ExternalLink";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View>
        <Text>Open up the code for this screen:</Text>

        <View>
          <Text>{path}</Text>
        </View>

        <Text>
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>

      <View>
        <ExternalLink href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
          <Text>
            Tap here if your app doesn't automatically update after making
            changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}
