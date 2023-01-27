import { Image, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import PinsList from "../components/PinsList";
import pins from "../assets/data/pins";
import { Entypo, Feather } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Feather name="share" size={24} color={"black"} style={styles.icon} />
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color={"black"}
            style={styles.icon}
          />
        </View>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/d1/e3/d2/d1e3d2a12bc3d0221898c4391dffcfff.jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Manuchim Oliver</Text>
        <Text style={styles.subtitle}>5 followers • 60 following</Text>
      </View>

      <PinsList pins={pins.slice(10, 20)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingBottom: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  icon: {
    paddingHorizontal: 7,
    right: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
  subtitle: {
    fontWeight: "bold",
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200 / 2,
    marginVertical: 10,
  },
});
