import { Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { useAuth } from "../providers/AuthProvider";

export default function App() {
  const { session, loading } = useAuth();

  // if (loading) {
  //   return <ActivityIndicator />;
  // }

  if (!session) {
    return <Redirect href={'/onboard/pageRank'} />;
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#101828] p-5">
      <View>
        <Image
          source={require("../../assets/images/palorant.png")}
          className="w-96 h-96"
        />
      </View>
      <Text className="text-3xl font-bold text-center mt-4 text-white">
        Meet Palorant
      </Text>
      <Text className="text-xl text-center px-5 my-5 text-secondary-300">
        A safe space for female VALORANT players to meet and play with other
        female players
      </Text>
      <View>
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
      </View>
    </SafeAreaView>
  );
}
