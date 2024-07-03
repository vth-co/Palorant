import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import DropdownComponent from "@/components/DropDown";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { DatePicker } from "react-native-woodpicker";
import DatePickerComponent from "@/components/DatePicker";

const pronounsData = [
  {
    label: "she/her",
    value: "she/her",
  },
  {
    label: "they/them",
    value: "they/them",
  },
  {
    label: "Ask me",
    value: "Ask me",
  },
];

const pageDisplay = () => {
  const [selectedPronouns, setSelectedPronouns] = useState(null);
  const [pickedDate, setPickedDate] = useState<Date>();
  const handleText = (): string =>
    pickedDate ? pickedDate.toDateString() : "No value Selected";

  const handlePronounsChange = (value) => {
    setSelectedPronouns(value);
  };

  const [form, setForm] = useState({
    displayName: "",
    pronouns: "",
    dateOfBirth: "",
    aboutMe: "",
  });
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView className="flex-1 bg-[#101828] p-5">
      <Text className="text-white text-3xl font-bold">Set up your profile</Text>
      <Text className="text-secondary-400 text-xl mt-3">
        Tell us about how you prefer to play
      </Text>
      <FormField
        title="Display name"
        value={form.displayName}
        placeholder="Display name"
        handleChangeText={(e) => setForm({ ...form, displayName: e })}
        otherStyles={"mt-5"}
      />
      <Text className="text-secondary-400 mb-3">
        This is how you will appear to other players
      </Text>
      <DropdownComponent
        data={pronounsData}
        label="Pronouns"
        onChange={handlePronounsChange}
        value={selectedPronouns}
      />
      {/* <FormField
        placeholder="Date of Birth"
        value={form.dateOfBirth}
        handleChangeText={(e) => setForm({ ...form, dateOfBirth: e })}
      /> */}
      <DatePickerComponent title="Date of Birth"/>
      <Text className="text-secondary-400 mb-3">
        By default, your age will be displayed to all players. This can be
        changed in account settings.
      </Text>
      <FormField
        title="About me"
        placeholder="Bio"
        value={form.bio}
        handleChangeText={(e) => setForm({ ...form, bio: e })}
      />
      <View className="absolute bottom-20 left-5">
        <CustomButton
          title="Next"
          handlePress={() => router.push("/onboard/pageProfilePicture")}
        />
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default pageDisplay;
