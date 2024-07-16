import { useState } from "react";
import { Link, router } from "expo-router";
import {
  Alert,
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

const SignUpScreen = () => {
  const [form, setForm] = useState({
    // username: "",
    email: "",
    password: "",
    // confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  // const signUpWithEmail = async () => {

  // }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      // username: form.username,
      email: form.email,
      password: form.password,
      // confirmPassword: form.confirmPassword
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      router.push("/onboard");
      setLoading(false);
    }
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
        <FormField
          placeholder="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          keyboardType="email-address"
        />
        {/* <FormField
        placeholder="Username"
        value={form.username}
        handleChangeText={(e) => setForm({ ...form, username: e })}
      /> */}
        <FormField
          placeholder="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
        />
        <Text className="text-secondary-400">
          Must be at least 8 characters
        </Text>
        <Text className="text-secondary-400">
          Contains at least one letter and one number
        </Text>
        <Text className="text-secondary-400">
          Includes upper and lower case letters
        </Text>
        {/* <FormField
        placeholder="Confirm Password"
        value={form.confirmPassword}
        handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
      /> */}
        <CustomButton
          title="Create account"
          handlePress={signUpWithEmail}
          containerStyles="mt-7"
          isLoading={loading}
        />
        <View className="flex-row items-center my-10">
          <View className="flex-1 h-px bg-[#2B3647] mx-2" />
          <Text className="text-secondary-400">or continue with</Text>
          <View className="flex-1 h-px bg-[#2B3647] mx-2" />
        </View>
        <View className="mb-10 flex-row justify-center">
          <CircleButton Icon={AppleIcon} />
          <CircleButton Icon={GoogleIcon} />
          <CircleButton Icon={TwitterIcon} />
        </View>
        <View className="px-10 mt-10">
          <Text className="text-white text-center">
            By creating an account, you agree to our {""}
            <Link href={"/terms-of-service"} className="text-[#BA99FF]">
              Terms of Service
            </Link>
            {""} and {""}
            <Link href={"/privacy-policy"} className="text-[#BA99FF]">
              Privacy Policy.
            </Link>
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
