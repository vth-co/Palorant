import { useState } from "react";
import {
  Button,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageSelectorPlaceholder from "./SVG Assets/ImageSelectorPlaceholder";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

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
      setImage(result.assets[0].uri);
    }
  };

  const cancelImage = async () => {
    setImage(null);
  };

  return (
    <View style={styles.container}>
      {image ? (
        <View>
          <TouchableOpacity onPress={pickImage}>
            <Image source={{ uri: image }} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={cancelImage}>
            <Text style={styles.buttonText}>Remove photo</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <ImageSelectorPlaceholder onPress={pickImage} />
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Text style={styles.buttonText}>Upload photo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 100,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 1000,
  },
  button: {
    marginTop: 10,
  },
  buttonText: {
    color: "gray",
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
  },
});
