import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import DropdownComponent from '@/components/DropDown'

const timezoneData = [
  {
    label: "Easter (GMT-4)",
    value: "Easter (GMT-4)"
  },
  {
    label: "Central (GMT-5)",
    value: "Central (GMT-5)"
  },
  {
    label: "Mountain (GMT-6)",
    value: "Mountain (GMT-6)"
  },
  {
    label: "Pacific (GMT-7)",
    value: "Pacific (GMT-7)"
  },
];

const serverData = [
  {
    label: "US West (Oregon)",
    value: "US West (Oregon)"
  },
  {
    label: "US West (N. California)",
    value: "US West (N. California)"
  },
  {
    label: "US East (N. Virginia)",
    value: "US East (N. Virginia)"
  },
  {
    label: "US Central (Texas)",
    value: "US Central (Texas)"
  },
];

const dayData = [
  {
    label: "Morning",
    value: "Morning"
  },
  {
    label: "Afternoon",
    value: "Afternoon"
  },
  {
    label: "Evening",
    value: "Evening"
  },
  {
    label: "Late Night",
    value: "Late Night"
  },
];

const communicationData = [
  {
    label: "Pings only",
    value: "Pings only"
  },
  {
    label: "Text chat only",
    value: "Text chat only"
  },
  {
    label: "Text + voice chat",
    value: "Text + voice chat"
  },
];

const typeData = [
  {
    label: "Casual",
    value: "Casual"
  },
  {
    label: "Serious",
    value: "Serious"
  },
  {
    label: "Beginner",
    value: "Beginner"
  },
]

const pageHabits = () => {
  return (
    <SafeAreaView>
      <Text>Gaming Habits</Text>
      <Text>Tell us about how you prefer to play</Text>
      <View className="absolute bottom-20 left-5">
      {/* <DropdownComponent rankData={rankData}  />
      <DropdownComponent tierData={tierData}  /> */}
        <CustomButton
          title="Next"
          handlePress={() => router.push("/onboard/pageDisplay")}
        />
      </View>
    </SafeAreaView>
  )
}

export default pageHabits
