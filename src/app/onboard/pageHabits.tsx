import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'

const pageHabits = () => {
  return (
    <SafeAreaView>
      <Text>Gaming Habits</Text>
      <Text>Tell us about how you prefer to play</Text>
      <View className="absolute bottom-20 left-5">
        <CustomButton
          title="Next"
          handlePress={() => router.push("/onboard/pageDisplay")}
        />
      </View>
    </SafeAreaView>
  )
}

export default pageHabits
