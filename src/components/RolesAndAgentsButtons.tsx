import React from "react";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const roles = [
  { name: "apple", key: "apple" },
  { name: "google", key: "google" },
  { name: "twitter", key: "twitter" },
];

const agents = [
    
]

const RolesAndAgentsButtons = () => {
  return (
    <View className="mb-10 flex-row justify-center">
      {socialMediaIcons.map((icon) => (
        <FontAwesome.Button
          key={icon.key}
          name={icon.name}
          backgroundColor={"none"}
          iconStyle={{ marginRight: 0 }}
          size={40}
          className="mx-5 p-5 bg-[#1D2939] rounded-full"
        />
      ))}
    </View>
  );
};

export default RolesAndAgentsButtons;
