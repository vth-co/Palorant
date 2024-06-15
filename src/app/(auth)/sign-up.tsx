import { useState } from "react";
import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import SocialMediaButtons from "@/src/components/SocialMediaButtons";
import { Divider } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/src/components/FormField";
import CustomButton from "@/src/components/CustomButton";

const SignUpScreen = () => {
  // const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      <FormField
        placeholder="Username"
        value={form.username}
        handleChangeText={(e) => setForm({ ...form, username: e })}
      />
      <FormField
        placeholder="Password"
        value={form.password}
        handleChangeText={(e) => setForm({ ...form, password: e })}
      />
      <Text>Must be at least 8 characters</Text>
      <Text>Contains at least one letter and one number</Text>
      <Text>Includes upper and lower case letters</Text>
      <FormField
        placeholder="Confirm Password"
        value={form.confirmPassword}
        handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
      />
      {/* <Button text="Create account" /> */}
      <CustomButton
        title="Create account"
        // handlePress={submit}
        containerStyles="mt-7"
        isLoading={isSubmitting}
      />
      <View className="flex-row items-center my-6">
        <View className="flex-1 h-px bg-gray-300 mx-2" />
        <View>
          <Text className="text-secondary-400">or continue with</Text>
        </View>
        <View className="flex-1 h-px bg-gray-300 mx-2" />
      </View>
      <SocialMediaButtons />
      <View>
        <Text
          style={{
            color: "lightgray",
            marginHorizontal: 40,
            marginVertical: 30,
            textAlign: "center",
          }}
        >
          By creating an account, you agree to our
          <Link href={"/terms-of-service"} className="text-[#BA99FF]">
            Terms of Service
          </Link>
          and
          <Link href={"/privacy-policy"} className="text-[#BA99FF]">
            Privacy Policy.
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     flex: 1,
//     backgroundColor: "#101828",
//     paddingTop: 30,
//   },
//   label: {
//     color: "gray",
//   },
//   input: {
//     marginTop: 5,
//     marginBottom: 20,
//     backgroundColor: "#1D2939",
//     marginHorizontal: 10,
//     borderRadius: 10,
//   },
//   textButton: {
//     alignSelf: "center",
//     fontWeight: "bold",
//     color: Colors.light.tint,
//     marginVertical: 10,
//   },
//   textDivider: {
//     textAlign: "center",
//     color: "gray",
//     fontSize: 15,
//   },
// });

export default SignUpScreen;
