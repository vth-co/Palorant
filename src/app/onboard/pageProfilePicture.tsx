import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'

const pageProfilePicture = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#101828] p-5">
      <Text className="text-white text-3xl font-bold">Choose profile picture</Text>
      <Text className="text-secondary-400 text-xl mt-3 mb-6">Pick a photo that best represents you</Text>
      <Text>Upload photo</Text>
      <View className="absolute bottom-20 left-5">
        <CustomButton
          title="Next"
          handlePress={() => router.push("/onboard/pageDisplay")}
        />
      </View>
    </SafeAreaView>
  )
}

export default pageProfilePicture
