import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const SinglePin = (props: any) => {
  const { image, title } = props.pin;

  const [aspectRatio, setAspectRatio] = useState(1 / 2);

  useEffect(() => {
    Image.getSize(image, (width, height) => setAspectRatio(width / height));
  }, [image]);

  return (
    <View style={styles.pinContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={[styles.image, { aspectRatio: aspectRatio }]}
      />
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </View>
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
