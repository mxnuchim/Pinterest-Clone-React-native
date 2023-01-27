import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import SinglePin from "../components/SinglePin";
import pins from "../assets/data/pins";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* PINS ARE ARRANGED IN TWO COLUMNS ON THE SCREEN IN ORDER TO ACHIEVE A DYNAMIC DISPLAY */}

        <View style={styles.pinsColumn}>
          {pins
            .filter((item, idx) => idx % 2 === 0)
            .map((x) => (
              <SinglePin pin={x} key={x.id} />
            ))}
        </View>

        <View style={styles.pinsColumn}>
          {pins
            .filter((item, idx) => idx % 2 === 1)
            .map((x) => (
              <SinglePin pin={x} key={x.id} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  pinsColumn: {
    flex: 1,
  },
});
