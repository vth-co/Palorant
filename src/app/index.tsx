import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#101828]">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View>
          <Image
            source={require("../../assets/images/palorant.png")}
            className="w-96 h-96"
          />
        </View>
        <Text className="text-3xl font-bold text-white text-center mt-4">Meet Palorant</Text>
        <Text className="text-xl text-white text-center px-10 my-5">
          A safe space for female VALORANT players to meet and play with other
          female players
        </Text>
        <Link href={"/sign-up"} asChild>
          <Button
            text="Create an account"
            containerStyle={{
              width: "90%",
            }}
          />
        </Link>
        <Link href={"/sign-in"} asChild>
          <Button
            text="Log in"
            containerStyle={{
              backgroundColor: "#1D2939",
              width: "90%",
            }}
          />
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}
