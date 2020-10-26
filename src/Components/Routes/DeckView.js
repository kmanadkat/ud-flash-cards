import React, { Component, Fragment } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import MyHeader from '../Layout/MyHeader'
import MyDeckMetaCard from '../Layout/MyDeckMetaCard'
import { bgPrimary, primary } from '../../Util/Colors'
import MyQuestionCard from '../Layout/MyQuestionCard'
import { FlatList } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons';

class DeckView extends Component {
  render() {
    const { deck, isLoaded} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: bgPrimary}}>
        {isLoaded && <Fragment>
          <View style={{flexDirection: "row", alignItems: "center", justifyContent:"space-between", marginHorizontal: 28}}>
            <MaterialIcons name="keyboard-backspace" size={30} color={primary} onPress={() => this.props.navigation.navigate("DeckList")} />
            <MyHeader title={deck.title} />
            <MaterialIcons name="keyboard-backspace" size={30} color={bgPrimary} />
          </View>
          <MyDeckMetaCard createdAt={deck.createdAt} numCards={deck.questions.length} />
          <FlatList
            data={deck.questions}
            renderItem={({item}) => <MyQuestionCard question={item.question} answer={item.answer} />}
            keyExtractor={(question) => question.question.substr(8)}
          />
        </Fragment>}
      </View>
    )
  }
}

const mapStateToProps = ({decks}, {id}) => ({
  isLoaded: true,
  deck: decks[id]
})

export default connect(mapStateToProps)(DeckView)