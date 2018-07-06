// reducers/order.js
import { CREATE_QUOTE, REMOVE_QUOTE, UPDATE_QUOTE } from '../constants/quote';

const DEFAULT_STATE = {
  quotes: []
}

export default function quoteReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CREATE_QUOTE:
      return {
        ...state,
        quotes: [...state.quotes, action.payload]
      }
    case REMOVE_QUOTE:
      return {
        ...state,
        orders: state.quotes.filter((quote, id) => {
          return id !== action.payload
        })
      }
    case UPDATE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.map((quote, index) => {
          if (index !== action.payload.id) return quote
          return {
            ...quote,
            ...action.payload.updatedQuote
          }
        })
      }

    default:
      return state
  }
}
