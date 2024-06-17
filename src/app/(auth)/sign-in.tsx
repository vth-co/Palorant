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
import { Link, Stack } from "expo-router";
import SocialMediaButtons from "@/src/components/SocialMediaButtons";
import FormField from "@/src/components/FormField";
import CustomButton from "@/src/components/CustomButton";

const SignInScreen = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setSubmitting] = useState(false);
  // const submit = async () => {
  //   if (form.username === "" || form.email === "" || form.password === "") {
  //     Alert.alert("Error", "Please fill in all fields");
  //   }

  //   setSubmitting(true);
  //   try {
  //     const result = await createUser(form.email, form.password, form.username);
  //     setUser(result);
  //     setIsLogged(true);

  //     router.replace("/home");
  //   } catch (error) {
  //     Alert.alert("Error", error.message);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };
  return (
    <SafeAreaView className="flex-1  justify-center bg-[#101828]">
      <Stack.Screen options={{ title: "Log in" }} />
      <View >
        <Image
          source={require("../../../assets/images/logo.png")}
           className="w-[220px] h-[56px] mb-10 ml-5"
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
      <Text className="ml-5 mt-2 text-secondary-400">Forgot your password?</Text>
      <CustomButton
            title="Log in"
            // handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
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
            backgroundColor: "#2B3647",
            marginHorizontal: 10,
          }}
        />
        <View>
          <Text className="text-secondary-400">or log in with</Text>
        </View>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#2B3647",
            marginHorizontal: 10,
          }}
        />
      </View>
      <SocialMediaButtons />
      <View className="mt-20 flex flex-row justify-center">
        <Text className="text-secondary-400">Don't have an account yet? {''}</Text>
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
  textDivider: {
    textAlign: "center",
    color: "gray",
    fontSize: 15,
  },
});

export default SignInScreen;
