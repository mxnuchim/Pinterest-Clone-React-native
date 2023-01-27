import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import pins from "../assets/data/pins";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import PinsList, { PinsListInterface } from "../components/PinsList";

const PinScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [aspectRatio, setAspectRatio] = useState(1);

  const pinId = route?.params?.id;

  const pin = pins.find((x) => x.id === pinId);

  if (!pin) {
    return <Text style={styles.title}>Pin not found, please try again</Text>;
  }

  useEffect(() => {
    Image.getSize(pin?.image, (width, height) =>
      setAspectRatio(width / height)
    );
  }, [pin]);

  function generateRandom(maxLimit = 100) {
    let rand = Math.random() * maxLimit;

    rand = Math.floor(rand); // 99
    console.log(rand); // say 99.81321410836433

    return rand;
  }

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Pressable
          style={[styles.backButton]}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={35} color="white" />
        </Pressable>
        <Image
          source={{ uri: pin?.image }}
          style={[styles.img, { aspectRatio: aspectRatio }]}
        />
        <Text style={styles.title}>{pin?.title}</Text>

        <View style={styles.moreLikeThis}>
          <Text style={styles.title}>More Like This</Text>
          <PinsList pins={pins.slice(generateRandom(5), generateRandom(23))} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PinScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  img: {
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  backButton: {
    position: "absolute",
    zIndex: 1,
    left: 15,
    top: 15,
  },
  title: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "600",
    textAlign: "center",
    margin: 10,
  },
  moreLikeThis: {},
});
