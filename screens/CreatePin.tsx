import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
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
      <TouchableOpacity style={styles.btn} onPress={pickImage}>
        <Text style={styles.btnText}>
          {imageUri ? "Choose another pin" : "Upload your Pin"}
        </Text>
      </TouchableOpacity>
      {imageUri && (
        <>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <TextInput
            placeholder="Title..."
            onChangeText={() => {}}
            style={styles.input}
            placeholderTextColor={"gray"}
          />
          <TouchableOpacity style={styles.btn} onPress={() => {}}>
            <Text style={styles.btnText}>Submit this Pin</Text>
          </TouchableOpacity>
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
    marginVertical: 15,
    borderRadius: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "100%",
    borderRadius: 5,
    height: 45,
    marginVertical: 15,
  },
  btn: {
    backgroundColor: "black",
    padding: 17,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 17,
    color: "white",
  },
});
