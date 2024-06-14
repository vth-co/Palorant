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
      <View>
        <TextInput
        //   style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#39393c"
          onChangeText={handleChangeText}
          secureTextEntry={
            (placeholder === "Password" || placeholder === "ConfirmPassword") &&
            !showPassword
          }
          {...props}
        />

        {(placeholder === "Password" || placeholder === "ConfirmPassword") && (
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

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     justifyContent: "center",
//     flex: 1,
//     backgroundColor: "#101828",
//     height: "100%",
//   },
//   label: {
//     color: "gray",
//   },
//   input: {
//     marginTop: 5,
//     marginBottom: 20,
//     backgroundColor: "#1D2939",
//     marginHorizontal: 10,
//   },
//   textButton: {
//     alignSelf: "center",
//     fontWeight: "bold",
//     color: 'white',
//     marginVertical: 10,
//   },
//   textDivider: {
//     textAlign: "center",
//     color: "gray",
//     fontSize: 15,
//   },
// });
export default FormField;
