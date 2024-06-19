import { Button, Text, View } from 'react-native'
import React, { useState } from 'react'

const onboarding = () => {

  const [page, setPage] = useState(1);

  function nextPage() {
    setPage(page + 1)
  }

  function prevPage() {
    setPage(page - 1)
  };

  return (
    <View>
      {
      }
      <Button onPress={nextPage} title='Next'/>

      { page !== 1 && 
      <Button onPress={prevPage} title='Back'/> 
      }
    </View>
  )
}

export default onboarding
