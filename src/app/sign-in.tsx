import { useState } from "react";
import { Link } from "expo-router";
import {
  Alert,
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "@/lib/supabase";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import TwitterIcon from "../components/SVG Assets/AltLoginButtons/TwitterIcon";
import GoogleIcon from "../components/SVG Assets/AltLoginButtons/GoogleIcon";
import AppleIcon from "../components/SVG Assets/AltLoginButtons/AppleIcon";
import CircleButton from "@/components/CircleButton";

const SignInScreen = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // const signUpWithEmail = async () => {

  // }

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) Alert.alert(error.message);
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 justify-center bg-[#101828] p-5">
        {/* <Stack.Screen options={{ headerShown: false }} /> */}
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-[220px] h-[56px] mb-10"
        />
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
        <Text className="mt-2 text-secondary-400">Forgot your password?</Text>
        {/* <FormField
        placeholder="Confirm Password"
        value={form.confirmPassword}
        handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
      /> */}
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
        <View className="flex-row justify-center mb-24">
          <CircleButton Icon={AppleIcon} />
          <CircleButton Icon={GoogleIcon} />
          <CircleButton Icon={TwitterIcon} />
        </View>
        <View className="flex flex-row justify-center ">
          <Text className="text-secondary-400">
            Don't have an account yet? {""}
          </Text>
          <Link href="/sign-up" className="text-[#BA99FF]">
            Create an account
          </Link>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
