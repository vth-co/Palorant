import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Button from "@/src/components/Button";
import Colors from "../../constants/Colors";
import { Link, Stack } from "expo-router";
import { TextInput } from "react-native-paper";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Sign in" }} />

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Username or email"
        placeholderTextColor="lightgray"

        textColor="white"

        style={styles.input}
      />

      {/* <MaterialCommunityIcons 
        name={showPassword ? 'eye-off' : 'eye'} 
        size={24} 
        color="#aaa"
        onPress={toggleShowPassword} 
      /> */}
      <TextInput
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="lightgray"
        textColor="white"
        style={styles.input}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye" : "eye-off"}
            onPress={toggleShowPassword}
          />
        }
      />
      <Text>Forgot your password?</Text>

      <Button text="Log in" />

      <View>
        <Text>Don't have an account yet?</Text>
        <Link href="/sign-up" style={styles.textButton}>
          Create an account
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#101828'

  },
  label: {
    color: 'gray',
  },
  input: {
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: '#1D2939',
    marginHorizontal: 10,
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },
});

export default SignInScreen;
