import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-community/async-storage'
import { generateUID } from './helper';
import {DECKS_STORAGE_KEY, DECKS, QUIZ_STORAGE_KEY, NOTIFICATION_KEY} from './_DATA'

// Fetch Initial Data & Store it to AsyncStorage & Redux Store
export const initializeData = async () => {
  // await AsyncStorage.removeItem(DECKS_STORAGE_KEY);  // For Debugging purpose
  let data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  if(data === null){
    data = DECKS;
    await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  }else{
    data = JSON.parse(data);
  }
  return data;
};

// Return all of the decks
export const getDecks = async () => {
  let data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  return data;
}

// Take in a single id & return the id associated deck
export const getDeck = async (deckId) => {
  let data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  return data[deckId];
}

// Take in a single title argument and add it to the decks.
export const saveDeckTitle = async (deckTitle) => {
  let data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  data = JSON.parse(data);
  let generatedUID = generateUID();
  let newDeck = {
    id: generatedUID,
    title: deckTitle,
    createdAt: new Date(),
    questions: []
  };
  data = { ...data, [generatedUID] : newDeck }
  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  return newDeck;
}

// Take in title & card, add the card to the list of questions of associated title deck.
export const addCardToDeck = async ({deckId, question, answer}) => {
  let data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  data = JSON.parse(data);
  let deckToAddQuestion = data[deckId];
  deckToAddQuestion = {
    ...deckToAddQuestion,
    "questions": [...deckToAddQuestion["questions"], {question, answer}]
  };
  await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deckId]: deckToAddQuestion
  }));
  return deckToAddQuestion;
}

// Add Quiz Details to AsyncStorage
export const addQuizData = async ({deckTitle, score}) => {
  let data = {
    lastAttemptDeck: deckTitle,
    lastAttemptedAt: new Date(),
    score
  };
  await AsyncStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(data));
  // Clear All Notifs
  clearLocalNotifications();
}

// Get Quiz Data
export const getQuizData = async () => {
  let data = await AsyncStorage.getItem(QUIZ_STORAGE_KEY);
  return JSON.parse(data);
}

// Clear All Notifications
export const clearLocalNotifications = async () => {
  await AsyncStorage.removeItem(NOTIFICATION_KEY)
  Notifications.cancelAllScheduledNotificationsAsync();
  return;
}

// Set Notification for Tomorrow
export function setLocalNotification(today){
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      // Notification isn't set for tomorrow, set it now
      if(data === null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status}) => {
            if(status === 'granted'){

              // if no notification is set and persmission is granted
              // remove garbage & clear any notifications
              Notifications.cancelAllScheduledNotificationsAsync()

              //set up how to handle the notification config
              Notifications.setNotificationHandler({
                handleNotification: async () => ({
                  shouldPlaySound: true,
                  shouldShowAlert: true,
                  shouldSetBadge: false
                })
              })
              
              //create a date object for : 5:00pm
              let tomorrow = new Date()  
              tomorrow.setHours(17);
              tomorrow.setMinutes(0);

              // Set notification for today if true param
              if(today === true){
                Notifications.scheduleNotificationAsync({
                  content: {
                    title: '👋 Hi! Here to remind you something',
                    body: "You have not taken any quiz today, happy learning!",
                  },
                  trigger : tomorrow
                })
                // console.log("today notif set");
              }
              
              // Schedule Tomorrow's Notification
              tomorrow.setDate(tomorrow.getDate() + 1);
              Notifications.scheduleNotificationAsync({
                content: {
                  title: '👋 Hi! Here to remind you something',
                  body: "You have not taken any quiz today, happy learning!",
                },
                trigger : tomorrow
              })
              // console.log("tomorrow notif set");
              // Set Notification value in Async Storage
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}