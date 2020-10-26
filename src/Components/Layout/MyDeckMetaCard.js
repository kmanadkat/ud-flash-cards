import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'

const MyDeckMetaCard = ({createdAt, numCards}) => {
  return (
    <View style={styles.metaCard}>
      <View style={styles.dateHolder}>
        <AntDesign name="calendar" size={18} color="#AFAFBD" />
        <Text style={styles.dateText}>{new Date(`${createdAt}`).toDateString()}</Text>
      </View>
      <View style={styles.numCards}>
        <AntDesign name="filetext1" size={18} color="#AFAFBD" />
        <Text style={styles.numCardsText}>{numCards} Cards</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  metaCard: {
    backgroundColor: "#ffffff",
    marginHorizontal: 18, 
    marginBottom: 20,
    padding:18,
    borderRadius: 6,
  },
  dateHolder: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    fontSize: 18,
    marginLeft: 9
  },
  numCards: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  numCardsText: {
    fontWeight: "bold",
    fontSize: 19,
    marginLeft: 9
  }
})

export default MyDeckMetaCard
