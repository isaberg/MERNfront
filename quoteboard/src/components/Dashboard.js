import React, { Component } from 'react'
import { URL } from "../api.js"
import axios from 'axios'
import {
  // AxiosProvider,
  // Request,
  Get,
  // Delete,
  // Head,
  // Post,
  // Put,
  // Patch,
  withAxios} from 'react-axios'

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      quotes: '',
    }
  }

  scrape = () => {
    axios.get(URL)
      .then((response) => {
        const quoteData = response.data
        console.log(response)
        this.setState({quotes: quoteData})
      })
  }

  componentDidMount () {
    console.log('Dashboard: cDidMount! run API scrape()')
    this.scrape()
  }

  componentWillUnmount() {
    console.log('Dashboard: cWillUnmount!...')
  }
  // below in return() is a conditional statement...if quote exists, sends prop to Quote.js
  render() {
    console.log('Dashboard renders!')
    console.log(`this is the quotes state: ${this.state.quotes}`)
    const quoteList = this.state.quotes
    // Cannot get the .map functionality to work (error; TypeError: quoteList.map is not a function)
    // let quoteDisplay = quoteList.map(quote => <li>{quote.author}:{quote.quote}</li>)
    // console.log(quoteDisplay)
    return (
      <div>
      <h3> A Board of Quotes </h3>
      <p>TBD: Quote Board</p>
      </div>
    )
  }
}

export default Dashboard
