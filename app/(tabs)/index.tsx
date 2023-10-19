import { View, Text, YStack } from "tamagui";

import { MainTransitionForm } from "../../components/forms/MainTransitionForm/MainTransitionForm";

export default function TabOneScreen() {
  return (
    <View>
      <YStack>
        <Text>Main Tab</Text>

        <MainTransitionForm />
      </YStack>
      <View />
    </View>
  );
}
