import React from 'react'
import {ReactDOM, render} from 'react-dom'
// import {
//   BrowserRouter as Router
// } from "react-router-dom"
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import { createQuote, removeQuote, updateQuote } from './actions/quote'
import quoteReducer from './reducers/quote'
import Root from './components/Root'

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

store.dispatch(createQuote('Isaiah', 'Just do it - createNewQuote()'))
store.dispatch(createQuote('Taylor', 'We live in the future - createNewQuote()'))
store.dispatch(removeQuote(0))
store.dispatch(updateQuote(0, {author: 'David', quote: 'I like to test updateQuote'}))

// ReactDOM.render(
//     <Router>
//       <App />
//     </Router>
//   document.getElementById('root')
// )

render(
  <Root store={store} />,
  document.getElementById('root')
)
