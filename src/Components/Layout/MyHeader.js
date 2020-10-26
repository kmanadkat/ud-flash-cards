import React from 'react'
import { View, Text } from 'react-native'

const MyHeader = ({title}) => {
  return (
    <View>
      <Text 
        style={{
          textAlign: "center",
          fontSize: 32,
          fontWeight: "bold",
          color: "#11182C",
          marginVertical: 32
        }}>{title}</Text>
    </View>
  )
}

export default MyHeader