import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";


const CircleButton = ({ Icon }) => {
  return (
    <TouchableOpacity className="p-4 bg-secondary-800 rounded-full mr-2">
      <Icon
      />
    </TouchableOpacity>
  );
};

export default CircleButton;
