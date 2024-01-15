import { View, Text, YStack, Spacer } from "tamagui";

import { MainTransitionForm } from "../../../components/forms/MainTransitionForm/MainTransitionForm";

export default function TabOneScreen() {
  return (
    <View>
      <YStack>
        <Spacer />
        <MainTransitionForm debitors={[]} creditors={[]} />
      </YStack>
      <View />
    </View>
  );
}
