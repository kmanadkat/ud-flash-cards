import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { handleReceiveData } from '../Actions/deck'
import { getQuizData, initializeData, setLocalNotification } from '../Util/api'
import MyStatusBar from './Layout/MyStatusBar'
import { NavigationContainer } from '@react-navigation/native'
import { MyStackNavigator } from './Navigation/MyStackNavigation'


class MyApp extends Component {
  state = { storeReady : false }
  componentDidMount(){
    initializeData()
    .then(decks => this.props.dispatch(handleReceiveData(decks)))
    .then(() => this.setState({storeReady: true}))

    getQuizData()
    .then(data => {
      if(data !== null){
        const {lastAttemptedAt} = data;
        // If Quiz is taken today ?
        if(new Date(lastAttemptedAt).toDateString() === new Date().toDateString())
          setLocalNotification(false);
        else
          setLocalNotification(true);  
      }else{
        // Quiz not taken today
        // Set today's & tomorrow's 5pm Notifs
        setLocalNotification(true);
      }
    })
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <MyStatusBar />
        {this.state.storeReady &&
          <NavigationContainer>
            <MyStackNavigator />
          </NavigationContainer>}
      </View>
    )
  }
}

export default connect()(MyApp)