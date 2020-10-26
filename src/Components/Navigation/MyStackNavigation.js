import React from 'react'
import {HomeTabsNavigator} from '../Navigation/HomeNavigation'
import {DeckTabsNavigator} from '../Navigation/DeckNavigation'
import { createStackNavigator } from '@react-navigation/stack';

const MyStack = createStackNavigator();
export const MyStackNavigator = () => {
  return (
    <MyStack.Navigator>
      <MyStack.Screen options={{headerShown: false}} name="Decks" component={HomeTabsNavigator} />
      <MyStack.Screen options={{headerShown: false}} name="Deck" component={DeckTabsNavigator} />
    </MyStack.Navigator>
  )
}