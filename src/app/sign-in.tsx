import { View, Text, SafeAreaView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import SocialMediaButtons from "@/src/components/SocialMediaButtons";
import FormField from "@/src/components/FormField";
import CustomButton from "@/src/components/CustomButton";
import { supabase } from "@/src/lib/supabase";

const SignInScreen = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) Alert.alert(error.message)
    setLoading(false);
  }

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
    <SafeAreaView className="flex-1 justify-center bg-[#101828] py-10">
      {/* <Stack.Screen options={{ title: "Log in" }} /> */}
      <View>
        <Image
          source={require("../../assets/images/logo.png")}
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
      <Text className="ml-5 mt-2 text-secondary-400">
        Forgot your password?
      </Text>
      <CustomButton
        title="Log in"
        handlePress={signInWithEmail}
        containerStyles="mt-7"
        isLoading={loading}
      />
      <View className="flex-row items-center my-10">
        <View className="flex-1 h-px bg-[#2B3647] mx-2" />
        <Text className="text-secondary-400">or log in with</Text>
        <View className="flex-1 h-px bg-[#2B3647] mx-2" />
      </View>
      <SocialMediaButtons />
      <View className="flex flex-row justify-center mt-20">
        <Text className="text-secondary-400">
          Don't have an account yet? {""}
        </Text>
        <Link href="/sign-up" className="text-[#BA99FF]">
          Create an account
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
