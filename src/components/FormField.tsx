import { useState } from "react";
import { View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`${otherStyles}`}>
      <View className="h-[55px] px-4 my-2  bg-gray-800 rounded-lg focus:border-secondary flex-row items-center">
        <TextInput
          className="flex-1 bg-gray-800 text-white text-base justify-center text-lg mb-1"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#98A2B3"
          onChangeText={handleChangeText}
          secureTextEntry={
            (placeholder === "Password" ||
              placeholder === "Confirm Password") &&
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
    </View>
  );
};

export default FormField;
