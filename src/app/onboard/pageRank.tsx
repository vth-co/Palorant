import { Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton';
import { View } from '@/components/Themed';
import { router } from 'expo-router';
import DropdownComponent from '@/components/DropDown';

const pageRank = () => {

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  
  return (
    <SafeAreaView className="flex-1 bg-[#101828] p-5">
      <Text className="text-white text-3xl font-bold">Choose your rank</Text>
      <Text className="text-secondary-400 text-xl mt-3">This will help us better match you with players in your rank</Text>
      <DropdownComponent />
      {/* <DropdownComponent /> */}
      <View className="absolute bottom-20 left-5">
        <CustomButton
          title="Next"
          handlePress={() => router.push("/onboard/pageHabits")}
        />
      </View>
    </SafeAreaView>
  )
}

export default pageRank
