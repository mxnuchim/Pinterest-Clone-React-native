import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const SinglePin = (props: any) => {
  const { image, title } = props.pin;

  const [aspectRatio, setAspectRatio] = useState(1 / 2);

  useEffect(() => {
    Image.getSize(image, (width, height) => setAspectRatio(width / height));
  }, [image]);

  return (
    <View style={styles.pin}>
      <Image
        source={{
          uri: image,
        }}
        style={[styles.image, { aspectRatio: aspectRatio }]}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default SinglePin;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    borderRadius: 25,
  },
  pin: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
});
