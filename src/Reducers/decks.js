import { ADD_DECK, ADD_QUESTION, RECEIVE_DATA } from "../Actions/deck"

export const decks = (state = {}, {type, payload}) => {
  switch (type) {
    case RECEIVE_DATA:
      return {...state, ...payload}

    case ADD_DECK:
      return {
        ...state,
        [payload.id]: payload
      }
    
    case ADD_QUESTION:
      return {
        ...state,
        [payload.id]: payload
      }

    default:
      return state
  }
}
