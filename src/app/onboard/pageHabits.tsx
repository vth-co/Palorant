import { Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import DropdownComponent from "@/components/DropDown";
import MultiSelectComponent from "@/components/MultiSelect";

const timezoneData = [
  {
    label: "Easter (GMT-4)",
    value: "Easter (GMT-4)",
  },
  {
    label: "Central (GMT-5)",
    value: "Central (GMT-5)",
  },
  {
    label: "Mountain (GMT-6)",
    value: "Mountain (GMT-6)",
  },
  {
    label: "Pacific (GMT-7)",
    value: "Pacific (GMT-7)",
  },
];

const serverData = [
  {
    label: "US West (Oregon)",
    value: "US West (Oregon)",
  },
  {
    label: "US West (N. California)",
    value: "US West (N. California)",
  },
  {
    label: "US East (N. Virginia)",
    value: "US East (N. Virginia)",
  },
  {
    label: "US Central (Texas)",
    value: "US Central (Texas)",
  },
];

const dayData = [
  {
    label: "Morning",
    value: "Morning",
  },
  {
    label: "Afternoon",
    value: "Afternoon",
  },
  {
    label: "Evening",
    value: "Evening",
  },
  {
    label: "Late Night",
    value: "Late Night",
  },
];

const communicationData = [
  {
    label: "Pings only",
    value: "Pings only",
  },
  {
    label: "Text chat only",
    value: "Text chat only",
  },
  {
    label: "Text + voice chat",
    value: "Text + voice chat",
  },
];

const typeData = [
  {
    label: "Casual",
    value: "Casual",
  },
  {
    label: "Serious",
    value: "Serious",
  },
  {
    label: "Beginner",
    value: "Beginner",
  },
];

const pageHabits = () => {
  const [selectedTimezone, setSelectedTimezone] = useState(null);
  const [selectedServer, setSelectedServer] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedCommunication, setSelectedCommunication] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleTimezoneChange = (value) => {
    setSelectedTimezone(value);
  };

  const handleServerChange = (value) => {
    setSelectedServer(value);
  };
  const handleDayChange = (value) => {
    setSelectedDay(value);
  };
  const handleCommunicationChange = (value) => {
    setSelectedCommunication(value);
  };
  const handleTypeChange = (value) => {
    setSelectedType(value);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#101828] p-5">
      <Text className="text-white text-3xl font-bold">Gaming Habits</Text>
      <Text className="text-secondary-400 text-xl mt-3 mb-6">
        Tell us about how you prefer to play
      </Text>
      <DropdownComponent
        data={timezoneData}
        label="Timezone"
        onChange={handleTimezoneChange}
        value={selectedTimezone}
      />
      <DropdownComponent
        data={serverData}
        label="Server"
        onChange={handleServerChange}
        value={selectedServer}
      />
      <MultiSelectComponent
        data={dayData}
        label="I play during the..."
        value={selectedDay}
      />
      <DropdownComponent
        data={communicationData}
        label="How I communicate"
        onChange={handleCommunicationChange}
        value={selectedCommunication}
      />
      <DropdownComponent
        data={typeData}
        label="Type of player"
        onChange={handleTypeChange}
        value={selectedType}
      />
      <View className="absolute bottom-20 left-5">
        <CustomButton
          title="Next"
          handlePress={() => router.push("/onboard/pageDisplay")}
        />
      </View>
    </SafeAreaView>
  );
};

export default pageHabits;
