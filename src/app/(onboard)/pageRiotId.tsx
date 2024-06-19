import { Button, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const pageRiotId = () => {
  return (
    <View>
      <Text>pageRiotId</Text>
      <Button
       title='Next'
       onPress={() => router.push('/pageRole')}
       />
    </View>
  )
}

export default pageRiotId
