import { createStore } from 'redux'
import quoteReducer from './reducers/quote'

export default createStore(quoteReducer)
