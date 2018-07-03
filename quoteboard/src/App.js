import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Submit from './components/Submit'
import './App.css'

class App extends Component {
  constructor () {
    super ()
    this.state = {
      // need to import data from API into state
    }
  }

  render () {
    return (
      <div>
        <nav>
          <div className='nav-wrapper blue lighten-2'>
            <a className='brand-logo left'>quoteBoard - MERN Lab</a>
            <ul className='right'>
              <li> <Link className='right' to='/'> Home </Link> </li>
              <li> <Link className='right' to='/about'> About </Link> </li>
              <li> <Link className='right' to='/submit'> Submit Quote </Link> </li>
            </ul>
          </div>
        </nav>
        <main>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route exact path="/submit" component={Submit} />
        </main>
      </div>
    )
  }
}

export default App
