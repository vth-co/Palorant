import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const socialMediaIcons = [
  { name: "apple", key: "apple" },
  { name: "google", key: "google" },
  { name: "twitter", key: "twitter" },
];

const SocialMediaButtons = () => {
  return (
    <View style={styles.iconButtonContainer}>
      {socialMediaIcons.map((icon) => (
        <FontAwesome.Button
          key={icon.key}
          name={icon.name}
          style={styles.iconButton}
          backgroundColor={"none"}
          iconStyle={{ marginRight: 0 }}
          size={30}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  iconButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  iconButton: {
    backgroundColor: "#1D2939",
    marginHorizontal: 10,
    borderRadius: 100,
    padding: 20,
  },
});

export default SocialMediaButtons;
