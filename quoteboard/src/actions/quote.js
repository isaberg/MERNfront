// Our action creator is just a JavaScript Function that returns a plain JavaScript Object
// TYPE is what governs the shape of the action creator's created object...
import {CREATE_QUOTE, REMOVE_QUOTE, UPDATE_QUOTE} from '../constants/quote'

export const removeQuote = id => ({type: REMOVE_QUOTE, payload: id})

export const updateQuote = (id, updatedQuote) => ({
  type: UPDATE_QUOTE,
  payload: {
    id,
    updatedQuote
  }
})

export function createQuote(author, quote) {
  return {
    type: CREATE_QUOTE,
    payload: {
      author,
      quote,
      status: 'pending'
    }
  }
}

// Example: calling this action creator:

// const quote = createNewQuote('Isaiah', 'Get off my lawn')

// The object we would get back (to send to our reducers) would look like this:

// const quote = {
//   type: 'CREATE_QUOTE',
//   payload: {
//     author: 'Isaiah',
//     quote: 'Get off my lawn',
//     status: 'pending'
//   }
// }
