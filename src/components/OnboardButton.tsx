import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const OnboardButton = ({ Icon }) => {
  return (
    <TouchableOpacity className="px-5 ">
      <Icon />
    </TouchableOpacity>
  );
};

export default OnboardButton;

const styles = StyleSheet.create({});
