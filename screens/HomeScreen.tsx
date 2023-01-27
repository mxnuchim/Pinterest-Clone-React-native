import { ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import SinglePin from "../components/SinglePin";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <SinglePin
          pin={{
            title: "Title",
            image:
              "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/6.jpeg",
          }}
        />
        {/* <SinglePin
          pin={{
            title: "Title 02",
            image:
              "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/5.jpeg",
          }}
        /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
