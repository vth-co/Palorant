import { useState } from "react";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import Button from "@/src/components/Button";
import { TextInput } from "react-native-paper";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Join Palorant" }} />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email address"
        placeholderTextColor="lightgray"
        textColor="white"
        style={styles.input}
      />
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        placeholderTextColor="lightgray"
        textColor="white"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="lightgray"
        textColor="white"
        style={styles.input}
        secureTextEntry
        right={
          <TextInput.Icon
            icon={showPassword ? "eye" : "eye-off"}
            onPress={toggleShowPassword}
          />
        }
      />
      <Text>Must be at least 8 characters</Text>
      <Text>Contains at least one letter and one number</Text>
      <Text>Includes upper and lower case letters</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry
        right={
          <TextInput.Icon
            icon={showPassword ? "eye" : "eye-off"}
            onPress={toggleShowPassword}
          />
        }
      />
      <Button text="Create account" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#101828",
  },
  label: {
    color: "gray",
  },
  input: {
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: '#1D2939',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});

export default SignUpScreen;
