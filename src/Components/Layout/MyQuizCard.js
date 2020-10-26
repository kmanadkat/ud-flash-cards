import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { danger } from '../../Util/Colors'

const MyQuizCard = ({question, answer}) => {

  const showAlert = () => {
    return Alert.alert(
      question,
      answer,
      [{text: "Dismiss"}]
    );
  }

  return (
    <View style={{...styles.cardWrapper, }}>
    <Text style={{fontSize: 18, fontWeight: "bold"}}>Question</Text>
    <View style={styles.horizontalRule}/>
    <Text style={{fontSize: 18, lineHeight: 28}}>{question}</Text>
    <View style={{alignItems: "center", marginTop: 16}}>
      <TouchableOpacity style={{paddingVertical: 6}} onPress={showAlert}>
        <Text style={{textAlign: "center", fontSize: 18, color: danger}}>Show Answer</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    marginHorizontal: 28,
    marginTop: 32,
    padding: 18,
    borderRadius: 6
  },
  horizontalRule: {
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 8
  }
})

export default MyQuizCard