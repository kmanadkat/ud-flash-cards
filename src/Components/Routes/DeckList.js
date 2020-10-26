import React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { bgPrimary } from '../../Util/Colors'
import { objectsToArray } from '../../Util/helper'
import MyCard from '../Layout/MyCard'
import MyHeader from '../Layout/MyHeader'

const DeckList = (props) => {
  const itemRenderer = ({item}) => {
    return (
      <MyCard 
        title={item.title} 
        numCards={item.questions.length}
        btnHandler={() => props.navigation.navigate("Deck", {id: item.id})} />
    )
  }
  return (
    <View style={{flex: 1, backgroundColor: bgPrimary}}>
      <MyHeader title="Decks" />
      <FlatList 
        data={props.decks}
        renderItem={itemRenderer}
        keyExtractor={deck => deck.id}
      />
    </View>
  )
}


const mapStateToProps = ({decks}) => ({
  isLoaded: true,
  decks: objectsToArray(decks).sort((a, b) => b.createdAt - a.createdAt)
})

export default connect(mapStateToProps)(DeckList);
