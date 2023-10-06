import { View, Text, XStack } from "tamagui";
import EditScreenInfo from "../../components/EditScreenInfo";

export default function TabOneScreen() {
  return (
    <View>
      <XStack>
        <Text>Tab One</Text>
      </XStack>
      <View />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
