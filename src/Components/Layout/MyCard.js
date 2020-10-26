import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { primary } from '../../Util/Colors';

const MyCard = ({title, numCards, btnHandler}) => {
  return (
    <View style={styles.deckCard}>
      <View style={styles.iconHolder}>
        <Feather name="layers" size={24} color="white" />
      </View>
      <View style={styles.cardInfoWrapper}>
        <Text style={styles.cardInfoTitle}>{title}</Text>
        <View style={styles.cardInfoSubtitleWrapper}>
          <AntDesign name="filetext1" size={18} color="#AFAFBD" />
          <Text style={styles.cardInfoSubtitle}>{numCards} cards</Text>
        </View>
      </View>
      <TouchableOpacity onPress={btnHandler}>
        <Feather name="chevron-right" size={24} color={primary} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  deckCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 6,
    padding: 18,
    marginHorizontal: 24,
    marginBottom: 12,
  },
  iconHolder: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primary,
    height: 58,
    width: 58,
    borderRadius: 6,
    marginRight: 18
  },
  cardInfoWrapper:{
    flex: 1,
},
  cardInfoTitle: {
    fontSize: 22,
    fontWeight: "bold"
  },
  cardInfoSubtitleWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6
  },
  cardInfoSubtitle: {
    fontSize: 19,
    color: "#9595B0",
    marginLeft: 6
  }
})

export default MyCard
