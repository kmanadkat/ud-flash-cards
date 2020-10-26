import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DeckList from '../Routes/DeckList';
import NewDeck from '../Routes/NewDeck';
import QuizInfo from '../Routes/QuizInfo';
import { primary, secondary } from '../../Util/Colors';

const HomeTabs = createBottomTabNavigator();
export const HomeTabsNavigator = () => {
  return (
    <HomeTabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName = '';
          if(route.name === "DeckList") iconName="home-outline";
          else if(route.name === "NewDeck") iconName="plus-box-outline";
          else if(route.name === "QuizInfo") iconName = "format-list-bulleted";
          return <MaterialCommunityIcons name={iconName} size={28} color={focused ? primary : secondary} />
        },
      })}
      tabBarOptions={{
        showLabel: true,
        style: styles.tabBar,
      }}>
      <HomeTabs.Screen name="DeckList" options={{title: "Decks"}} component={DeckList} />
      <HomeTabs.Screen name="NewDeck" options={{title: "Create Deck"}} component={NewDeck} />
      <HomeTabs.Screen name="QuizInfo" options={{title: "Quiz Info"}} component={QuizInfo} />
    </HomeTabs.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: 68,
    borderTopColor: '#ffffff',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    elevation: 4,
    paddingBottom: 10,
    paddingTop: 14
  },
});
