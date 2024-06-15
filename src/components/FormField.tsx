import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface FormFieldProps extends TextInputProps {
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: ViewStyle | TextStyle;
}

const FormField: React.FC<FormFieldProps> = ({
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
      <View  className="h-[55px] px-4 my-2 mx-5 bg-gray-800 rounded-lg focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 bg-gray-800 text-white text-base h-full justify-center"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#98A2B3"
          onChangeText={handleChangeText}
          secureTextEntry={
            (placeholder === "Password" || placeholder === "Confirm Password") &&
            !showPassword
          }
          {...props}
        />

        {(placeholder === "Password" || placeholder === "Confirm Password") && (
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#aaa"
            onPress={() => setShowPassword(!showPassword)}
          />
        )}
      </View>
  );
};

export default FormField;
