import React from 'react'
import { StatusBar } from 'react-native'

const MyStatusBar = () => {
  return (
    <StatusBar 
      barStyle="dark-content"
      translucent={false}
      backgroundColor="#EEF0F6" />
  )
}

export default MyStatusBar