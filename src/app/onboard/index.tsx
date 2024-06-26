import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";

const index = () => {
  const [form, setForm] = useState({
    riotId: "",
    tag: "",
  });

  // const [loading, setLoading]

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 bg-[#101828] p-5">
        <Text className="text-white text-3xl font-bold">
          Welcome to Palorant
        </Text>
        <Text className="text-secondary-400 text-xl mt-2">
          What's your in-game name?
        </Text>
        <View className="flex-row mt-5">
          <FormField
            placeholder="Riot ID"
            value={form.riotId}
            handleChangeText={(e) => setForm({ ...form, riotId: e })}
            otherStyles="w-2/3 mr-2"
          />
          <FormField
            placeholder="#TAG"
            value={form.tag}
            handleChangeText={(e) => setForm({ ...form, tag: e })}
            otherStyles="w-1/3"
          />
        </View>
        <Text className="text-secondary-400 mr-5">
          By default, your Riot ID will only be visible to friends. This can be
          changed in account settings.
        </Text>
        <View className="absolute bottom-20 left-5">
          <CustomButton
            title="Next"
            handlePress={() => router.push("/onboard/pageRole")}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default index;

const styles = StyleSheet.create({});
