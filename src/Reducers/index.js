const { combineReducers } = require("redux");
const { decks } = require("./decks");

export const rootReducer = combineReducers({
  decks
})