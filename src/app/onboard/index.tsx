import { StyleSheet, Text, View } from "react-native";
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
    <SafeAreaView className="flex-1 bg-[#101828] p-5">
      <Text className="text-white text-3xl font-bold">Welcome to Palorant</Text>
      <Text className="text-secondary-400">What's your in-game name?</Text>
      <View className="flex flex-row">
        <FormField
          placeholder="Riot ID"
          value={form.riotId}
          handleChangeText={(e) => setForm({ ...form, riotId: e })}
          containerStyles="w-4/5"
        />
        <FormField
          placeholder="#TAG"
          value={form.tag}
          handleChangeText={(e) => setForm({ ...form, tag: e })}
          containerStyles="w-1/5"
        />
      </View>
      <Text className="text-secondary-400">
        By default, your Riot ID will only be visible to friends. This can be
        changed in account settings.
      </Text>
      <CustomButton
        title="Next"
        handlePress={() => router.push("/onboard/pageRole")}
        containerStyles="mt-7"
      />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
