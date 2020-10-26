import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';

const MyPrimaryBtn = ({title, handleClick, iconName, color, paddingHorizontal}) => {
  paddingHorizontal = paddingHorizontal ? paddingHorizontal : 32
  return (
    <View style={styles.btnHolder}>
      <TouchableOpacity style={{...styles.primaryButton, backgroundColor: color, paddingHorizontal}} onPress={handleClick}>
        <AntDesign name={iconName} size={14} color="white" />
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btnHolder: {
    alignItems: "center",
    marginTop: 24
  },
  primaryButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    paddingVertical: 14,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    marginHorizontal: 8
  }
})

export default MyPrimaryBtn
