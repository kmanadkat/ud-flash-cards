import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { bgPrimary } from '../../Util/Colors'
import MyHeader from '../Layout/MyHeader'
import { Feather } from '@expo/vector-icons';
import { getQuizData } from '../../Util/api';

class QuizInfo extends React.Component {
  state = {
    lastAttemptDeck: "",
    lastAttemptedAt: null,
    score: 0,
  }

  componentDidMount(){
    // Reload Quiz Data Whenever this component comes in focus
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.loadQuizData();
    });
    this.loadQuizData();
  }

  componentWillUnmount(){
    // Unsubscribe from 'focus' event listening 
    this._unsubscribe();
  }

  loadQuizData = () => {
    getQuizData()
    .then(data => {
      if(data !== null){
        const {lastAttemptDeck, lastAttemptedAt, score} = data;
        this.setState({lastAttemptDeck, lastAttemptedAt, score})
      }
    })
  }

  render(){
    const {lastAttemptDeck, lastAttemptedAt, score} = this.state;
    return (
      <View style={{backgroundColor: bgPrimary, flex: 1}}>
        <MyHeader title="Quiz Info" />
        <View style={styles.cardWrapper}>
          <Text style={styles.cardHeader}>⛳️ &nbsp; Last Quiz Taken Today</Text>
          <View style={styles.horizontalRule} />
          {lastAttemptedAt === null 
          ? <View style={{alignItems: "center", justifyContent: "center"}}>
              <Text style={{paddingVertical: 12, fontSize: 16}}>Oops! You didnot take any quiz today</Text>
            </View>
          : <View>
            <View style={styles.infoWrapper}>
              <Feather name="layers" size={20} color="#AFAFBD" />
              <Text style={styles.infoText}>{lastAttemptDeck}</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", marginTop: 14}}>
              <Feather name="clock" size={20} color="#AFAFBD" />
              <Text style={styles.infoText}>{new Date(lastAttemptedAt).toLocaleTimeString()}</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", marginTop: 14}}>
              <Feather name="check-square" size={20} color="#AFAFBD" />
              <Text style={styles.infoText}>{score}</Text>
            </View>
          </View>}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: "#ffffff",
    padding: 18,
    marginHorizontal: 18,
    borderRadius: 6
  },
  cardHeader: {
    fontSize: 19, fontWeight: "bold"
  },
  horizontalRule: {
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 1,
    marginTop: 14,
    marginBottom: 8
  },
  infoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14
  },
  infoText: {
    marginLeft: 14,
    fontSize: 18,
    paddingBottom: 2
  }
})

export default  QuizInfo
