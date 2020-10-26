import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { primary } from '../../Util/Colors'

const MyQuestionCard = ({question, answer}) => {
  const showAlert = () => {
    return Alert.alert(
      question,
      answer,
      [{text: "Learnt"}]
    );
  }
  return (
    <View style={styles.questionCard}>
      <Text textBreakStrategy="simple" style={styles.questionText}>{question}</Text>
      <TouchableOpacity onPress={showAlert}>
        <Feather name="info" size={22} color={primary} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 18,
    marginBottom: 12,
    padding: 18,
    borderRadius: 6,
  },
  questionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 26,
    paddingRight: 8,
  }
})

export default MyQuestionCard
