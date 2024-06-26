import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { supabase } from '@/lib/supabase'

const profile = () => {
  return (
    <View>
      <Text>profile</Text>
      <Button 
      title='Sign out'
      onPress={async () => await supabase.auth.signOut()}
      />
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})
