import AsyncStorage from '@react-native-community/async-storage'
import React, { Component } from 'react'
import { Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { addQuizData } from '../../Util/api'
import { bgPrimary, danger, primary, success } from '../../Util/Colors'
import MyHeader from '../Layout/MyHeader'
import MyPrimaryBtn from '../Layout/MyPrimaryBtn'
import MyQuizCard from '../Layout/MyQuizCard'

class QuizView extends Component {
  state = {
    score: 0,
    currentIndex: 0,
    submittedAt: null,
  }
  handleAnswer = (type) => {
    let newScore = this.state.score;
    if(type === true){
      newScore += 1;
    }
    this.setState({
      score: newScore,
      currentIndex: this.state.currentIndex + 1
    }, () => {
      if(this.state.currentIndex === this.props.deck.questions.length){
        addQuizData({
          deckTitle: this.props.deck.title,
          score: `${Math.floor((this.state.score * 100 ) / this.props.deck.questions.length)}%`
        });
      }
    })
  }

  render() {
    const {isLoaded, deck} = this.props;
    const {currentIndex, score} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: bgPrimary}}>
        {isLoaded && <Fragment>
          <MyHeader title={`Quiz - ${deck.title}`} /> 
          {currentIndex === deck.questions.length
          ? <View style={{alignItems: "center", marginTop: 104}}>
            <Text style={{fontSize: 38}}>
              {deck.questions.length === 0 ? "Add Cards First!" : "Your Score"}
            </Text>
            {deck.questions.length !== 0 && <Text style={{fontSize: 54, color: primary, fontWeight: "bold", marginVertical: 4}}>
               {Math.floor((score * 100 ) / deck.questions.length)}%
            </Text>}
            {deck.questions.length !== 0 && <MyPrimaryBtn 
              title="Retake Quiz"
              iconName="reload1"
              color={success}
              handleClick={() => this.setState({score: 0, currentIndex: 0})} />}
          </View>
          : <Fragment>
            <View style={styles.cardWrapper}>
              <Text style={{fontSize: 18}}>Current Question: &nbsp;</Text>
              <Text style={{fontSize: 18, fontWeight: "bold"}}>{currentIndex + 1}/{deck.questions.length}</Text>
            </View>
            <MyQuizCard 
              question={deck.questions[currentIndex].question} 
              answer={deck.questions[currentIndex].answer} />
            <View style={{marginTop: 42}}>
              <MyPrimaryBtn
                paddingHorizontal={37}
                title="Mark Correct"
                iconName="checkcircleo"
                handleClick={() => this.handleAnswer(true)}
                color={success} />
              <MyPrimaryBtn
                title="Mark Incorrect"
                iconName="closecircleo"
                handleClick={() => this.handleAnswer(false)}
                color={danger} />
            </View>
          </Fragment>}
        </Fragment>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: "row",
    marginHorizontal: 28,
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 6,
  }
})

const mapStateToProps = ({decks}, {id}) => {
  return {
    isLoaded: true,
    deck: decks[id],
  }
}

export default connect(mapStateToProps)(QuizView)