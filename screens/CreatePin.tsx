import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";

const CreatePin = () => {
  const [imageUri, setImageUri] = useState<any>();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.root}>
      <Button title="Upload your Pin" onPress={pickImage} />
      {imageUri && (
        <>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <TextInput
            placeholder="Title..."
            value={"title"}
            onChangeText={() => {}}
            style={styles.input}
          />
          <Button title="Submit Pin" onPress={() => {}} />
        </>
      )}
    </View>
  );
};

export default CreatePin;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 5,
    width: "100%",
    borderRadius: 5,
  },
});
