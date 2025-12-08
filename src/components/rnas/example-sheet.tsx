import { Text, View } from "react-native";
import ActionSheet from "react-native-actions-sheet";

function ExampleSheet() {
  return (
    <ActionSheet gestureEnabled>
      <View>
        <Text>Hello World</Text>
      </View>
    </ActionSheet>
  );
}

export default ExampleSheet;
