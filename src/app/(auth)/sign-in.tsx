import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import Button from "@/src/components/Button";
import Colors from "../../constants/Colors";
import { Link, Stack } from "expo-router";
import { TextInput } from "react-native-paper";
import SocialMediaButtons from "@/src/components/SocialMediaButtons";
import FormField from "@/src/components/FormField";

const SignInScreen = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);



  return (
    <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ title: "Sign in" }} />
        <FormField
            placeholder="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
          />
          
          <FormField
            placeholder="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />
        {/* <MaterialCommunityIcons 
        name={showPassword ? 'eye-off' : 'eye'} 
        size={24} 
        color="#aaa"
        onPress={toggleShowPassword} 
        /> */}
        {/* <TextInput
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
        /> */}
        <Text>Forgot your password?</Text>

        <Button text="Log in" />

        <View>
          <Text>Don't have an account yet?</Text>
          <Link href="/sign-up" style={styles.textButton}>
            Create an account
          </Link>
        </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#101828",
    height: "100%",
  },
  label: {
    color: "gray",
  },
  input: {
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "#1D2939",
    marginHorizontal: 10,
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

export default SignInScreen;
