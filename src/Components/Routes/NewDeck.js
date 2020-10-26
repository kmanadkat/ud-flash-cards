import React, { Component } from 'react'
import { Keyboard, View } from 'react-native'
import { connect } from 'react-redux'
import { handleAddDeck } from '../../Actions/deck'
import { saveDeckTitle } from '../../Util/api'

import { bgPrimary, success } from '../../Util/Colors'
import MyHeader from '../Layout/MyHeader'
import MyInputField from '../Layout/MyInputField'
import MyPrimaryBtn from '../Layout/MyPrimaryBtn'

class NewDeck extends Component {
  state = { deckTitle: '' }
  handleChange = (text) => this.setState({deckTitle: text});
  handleSubmit = () => {
    saveDeckTitle(this.state.deckTitle)
    .then(newDeck => {
      this.props.dispatch(handleAddDeck(newDeck))
      Keyboard.dismiss();
      this.setState({deckTitle: ''}, () => {
        this.props.navigation.navigate("Deck", {id: newDeck.id})
      })
    });
  }
  render() {
    const {deckTitle} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: bgPrimary}}>
        <MyHeader title="Create Deck" />
        <View style={{margin: 28}}>
          <MyInputField value={deckTitle} handleChange={this.handleChange} placeholder="Enter deck title" />
          <MyPrimaryBtn 
            title="Create New Deck"
            handleClick={this.handleSubmit}
            iconName="pluscircleo" 
            color={success} />
        </View>
      </View>
    )
  }
}

export default connect()(NewDeck)