import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { Link, router } from "expo-router";
import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#101828]">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View>
          <Image
            source={require("../../assets/images/palorant.png")}
            className="w-full h-96"
          />
        </View>
        <Text className="text-3xl font-bold text-white text-center mt-4">
          Meet Palorant
        </Text>
        <Text className="text-xl text-white text-center px-10 my-5  text-secondary-300">
          A safe space for female VALORANT players to meet and play with other
          female players
        </Text>
        <CustomButton
          title="Create an account"
          containerStyles="mt-10"
          handlePress={() => router.push("/sign-up")}
        />
        <CustomButton
          title="Log in"
          containerStyles="mt-5 bg-secondary-800"
          handlePress={() => router.push("/sign-in")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
