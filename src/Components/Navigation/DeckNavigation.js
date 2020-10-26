import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { primary, secondary } from '../../Util/Colors';
import DeckView from '../Routes/DeckView';
import NewCard from '../Routes/NewCard';
import QuizView from '../Routes/QuizView';

const DeckTabs = createBottomTabNavigator();
export const DeckTabsNavigator = (props) => {
  const deckId = props.route.params.id;
  return (
    <DeckTabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName = '';
          if(route.name === "DeckView") iconName="file-document-outline";
          else if(route.name === "NewCard") iconName="file-plus-outline";
          else if(route.name === "QuizView") iconName = "clipboard-check-outline";
          return <MaterialCommunityIcons name={iconName} size={28} color={focused ? primary : secondary} />
        },
      })}
      tabBarOptions={{
        showLabel: true,
        style: styles.tabBar,
      }}>
      <DeckTabs.Screen name="DeckView" options={{title: "Cards"}}>{(props) => <DeckView {...props} id={deckId} />}</DeckTabs.Screen>
      <DeckTabs.Screen name="NewCard" options={{title: "Add Card"}}>{(props) => <NewCard {...props} id={deckId} />}</DeckTabs.Screen>
      <DeckTabs.Screen name="QuizView" options={{title: "Quiz"}}>{(props) => <QuizView {...props} id={deckId} />}</DeckTabs.Screen>
    </DeckTabs.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: 64,
    borderTopColor: '#ffffff',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    elevation: 4,
    paddingBottom: 10,
    paddingTop: 14
  },
});
