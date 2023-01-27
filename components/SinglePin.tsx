import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SinglePin = (props: any) => {
  const { id, image, title } = props.pin;
  const navigation = useNavigation();

  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    Image.getSize(image, (width, height) => setAspectRatio(width / height));
  }, [image]);

  const toPinScreen = () => {
    navigation.navigate("Pin", { id });
  };

  return (
    <Pressable onPress={toPinScreen} style={styles.pinContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={[styles.image, { aspectRatio: aspectRatio }]}
      />
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </Pressable>
  );
};

export default SinglePin;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    borderRadius: 25,
  },
  pinContainer: {
    width: "100%",
    padding: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 5,
    color: "black",
  },
});
