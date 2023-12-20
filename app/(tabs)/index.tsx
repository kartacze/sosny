import { View, Text, YStack } from "tamagui";

import { MainTransitionForm } from "../../components/forms/MainTransitionForm/MainTransitionForm";


// TODO HERE I will be loading wallets and so on now

export default function TabOneScreen() {

  return (
    <View>
      <YStack>
        <Text>Main Tab</Text>

        <MainTransitionForm debitors={[]} creditors={[]} />
      </YStack>
      <View />
    </View>
  );
}
