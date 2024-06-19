import { useState } from "react";
import { Link, Stack, router } from "expo-router";
import { Alert, Text, View } from "react-native";
import SocialMediaButtons from "@/src/components/SocialMediaButtons";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/src/components/FormField";
import CustomButton from "@/src/components/CustomButton";
import { supabase } from "@/src/lib/supabase";

const SignUpScreen = () => {
  // const { setUser, setIsLogged } = useGlobalContext();

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
      router.push('pageRiotId');
    }
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
    <SafeAreaView className="flex-1  justify-center bg-[#101828]">
      <Stack.Screen options={{ title: "Join Palorant" }} />
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
      <Text className="text-secondary-400">Must be at least 8 characters</Text>
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
      <SocialMediaButtons />
      <View className="px-12 mt-10">
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
  );
};

export default SignUpScreen;
