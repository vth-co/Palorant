import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
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
    <SafeAreaView className="flex-1  justify-center bg-[#101828]">
      <Stack.Screen options={{ title: "Log in" }} />
      <View >
        <Image
          source={require("../../../assets/images/logo.png")}
           className="w-[220px] h-[56px] mb-10 ml-2"
        />
      </View>

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
      <Text className="text-white">Forgot your password?</Text>
      <Button className="mt-10" text="Log in" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 30,
        }}
      >
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "gray",
            marginHorizontal: 10,
          }}
        />
        <View>
          <Text style={styles.textDivider}>or continue with</Text>
        </View>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "gray",
            marginHorizontal: 10,
          }}
        />
      </View>
      <SocialMediaButtons />
      <View className="mt-20 flex flex-row justify-center space-x-1">
        <Text className="text-white">Don't have an account yet?</Text>
        <Link href="/sign-up" className="text-[#BA99FF]">
          Create an account
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "gray",
  },
  input: {
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "#1D2939",
    marginHorizontal: 10,
  },
  // textButton: {
  //   alignSelf: "center",
  //   fontWeight: "bold",
  //   color: Colors.light.tint,
  //   marginVertical: 10,
  // },
  textDivider: {
    textAlign: "center",
    color: "gray",
    fontSize: 15,
  },
});

export default SignInScreen;
