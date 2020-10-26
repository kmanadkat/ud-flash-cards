// Action Types
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';

// Action Creators
export const handleReceiveData = (decks) => ({
  type: RECEIVE_DATA,
  payload: decks
});

// @params : deck = {id, title, createdAt, questions}
export const handleAddDeck = (deck) => ({
  type: ADD_DECK,
  payload: deck
})

// @params : deck = {id, title, createdAt, questions}
// deck with new question added
export const handleAddQuestion = (deck) => ({
  type: ADD_QUESTION,
  payload: deck
})
