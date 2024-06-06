import { useState } from "react";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import Button from "@/src/components/Button";
import { IconButton, TextInput } from "react-native-paper";
import SocialMediaButtons from "@/src/components/SocialMediaButtons";
import { Divider } from "@rneui/themed";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Join Palorant" }} />
      <TextInput
        value={email}
        onChangeText={setEmail}
        autoComplete="email"
        placeholder="Email address"
        placeholderTextColor="lightgray"
        textColor="white"
        mode="flat"

        style={styles.input}
        theme={{ roundness: 10 }}
        underlineColor= 'none'
        activeUnderlineColor= 'none'

      />
      <TextInput
        value={username}
        onChangeText={setUsername}
        autoComplete="username"
        placeholder="Username"
        placeholderTextColor="lightgray"
        textColor="white"
        style={styles.input}
        theme={{ roundness: 10 }}
        underlineColor= 'none'
        activeUnderlineColor= 'none'
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        autoComplete="off"
        placeholder="Password"
        placeholderTextColor="lightgray"
        textColor="white"
        style={styles.input}
        theme={{ roundness: 10 }}
        underlineColor= 'none'
        activeUnderlineColor= 'none'
        secureTextEntry={!showPassword}
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
        placeholderTextColor="lightgray"
        textColor="white"
        style={styles.input}
        theme={{ roundness: 10 }}
        underlineColor= 'none'
        activeUnderlineColor= 'none'
        secureTextEntry={!showConfirmPassword}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye" : "eye-off"}
            onPress={toggleShowConfirmPassword}
          />
        }
      />
      <Button text="Create account" />
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 30 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "gray", marginHorizontal: 10 }} />
        <View>
          <Text style={styles.textDivider}>
            or continue with
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "gray", marginHorizontal: 10 }} />
      </View>
      <SocialMediaButtons />
      <Text style={{ color: 'lightgray', marginHorizontal: 40, marginVertical: 30, textAlign: 'center'}}>
        By creating an account, you agree to our Terms of Service and Privacy Policy.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#101828",
    paddingTop: 30,
  },
  label: {
    color: "gray",
  },
  input: {
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "#1D2939",
    marginHorizontal: 10,
    borderRadius: 10,
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
  textDivider: {
    textAlign: "center",
    color: "gray",
    fontSize: 15,
  },
});

export default SignUpScreen;
