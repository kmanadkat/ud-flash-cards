import React, { Component } from 'react'
import { Fragment } from 'react';
import { Keyboard, View } from 'react-native'
import { connect } from 'react-redux';
import { handleAddQuestion } from '../../Actions/deck';
import { addCardToDeck } from '../../Util/api';
import { bgPrimary, success } from '../../Util/Colors';
import MyHeader from '../Layout/MyHeader';
import MyInputField from '../Layout/MyInputField';
import MyPrimaryBtn from '../Layout/MyPrimaryBtn';

class NewCard extends Component {
  state = {question: '', answer: ''}

  handleQuestionChange = (text) => this.setState({question: text});
  handleAnswerChange = (text) => this.setState({answer: text});

  handleSubmit = () => {
    const {id, dispatch} = this.props;
    const {question, answer} = this.state;
    addCardToDeck({deckId: id, question, answer})
      .then(newDeck => {
        dispatch(handleAddQuestion(newDeck));
        Keyboard.dismiss();
        this.setState({question: '', answer: ''});
        this.props.navigation.navigate("DeckView");
      })
  }

  render() {
    const {question, answer} = this.state;
    const {isLoaded, deckTitle} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: bgPrimary}}>
        {isLoaded && <Fragment>
          <MyHeader title={`New Card - ${deckTitle}`} />
          <View style={{marginTop: 28, marginHorizontal: 28}}>
            <MyInputField value={question} placeholder="Enter question" handleChange={this.handleQuestionChange} />
            <View style={{marginTop: 14}}>
              <MyInputField value={answer} placeholder="Enter Answer" handleChange={this.handleAnswerChange} />
            </View>
          </View>
          <MyPrimaryBtn color={success} title="Add Card" iconName="pluscircleo" handleClick={this.handleSubmit} />
        </Fragment>}
      </View>
    )
  }
}

const mapStateToProps = ({decks}, {id}) => {
  return {
    isLoaded: true,
    deckTitle: decks[id].title
  }
}


export default connect(mapStateToProps)(NewCard)