import { StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'

const index = () => {

  const [form, setForm] = useState({
    riotId: "",
    tag: "",
  })

  // const [loading, setLoading] 

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#101828]">
      <Text className='text-white'>Welcome to Palorant</Text>
      <Text className='text-white'>What's your in-game name?</Text>
      <FormField
        placeholder="Riot ID"
        value={form.riotId}
        handleChangeText={(e) => setForm({...form, riotId: e})}
      />
      <FormField
        placeholder="#TAG"
        value={form.tag}
        handleChangeText={(e) => setForm({...form, tag: e})}
      />
      <CustomButton
       title='Next'
       handlePress={() => router.push('/pageRole')}
       />
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})
