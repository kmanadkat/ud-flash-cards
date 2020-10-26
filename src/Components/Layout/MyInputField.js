import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const MyInputField = ({value, handleChange, placeholder}) => {
  return (
    <TextInput
      onChangeText={handleChange}
      value={value}
      placeholder={placeholder}
      style={{
        backgroundColor: "#ffffff",
        paddingHorizontal: 18,
        paddingVertical: 14,
        borderRadius: 6,
        fontSize: 17
      }} />
  )
}

export default MyInputField