import React, { Component } from 'react'
import { URL } from "../api.js"
import axios from 'axios'
// import {
  // AxiosProvider,
  // Request,
  // Get,
  // Delete,
  // Head,
  // Post,
  // Put,
  // Patch,
  // withAxios} from 'react-axios'

class Quote extends Component {
  constructor () {
    super ()
    this.state = {
      authorString: '',
      quoteString: '',
      notification: ''
    }
  }
  stateChange = (e) => {
    // making React state respond to each user form change, resulting in "single source of truth"
    console.log('Submit form: stateChange()')
    const keyValue = e.target.value
    const keyName = e.target.name
    this.setState({ notification:'...done with that quote yet?'})
    this.setState({
          [keyName]: keyValue
        })
  }

  submitQuote = (e) => {
    e.preventDefault()
    console.log('axios sends user')
    this.setState({ notification:'Quote submitted! wooohoooo!'})
    axios.post(URL, { author: this.state.authorString, quote: this.state.quoteString})
    .then(res => {
        console.log(res);
        console.log(res.data);
      })
    console.log(`this is the submitted quote: ${this.state.quoteString} by ${this.state.authorString}`)
  }

  render () {
    return (
      <div className="form">
      <h1>Add a Quote!</h1>
      <input
        type="text"
        name="authorString"
        placeholder="Author Name"
        value={this.state.authorString}
        onChange={this.stateChange}
      />
      <input
        type="text"
        name="quoteString"
        placeholder="Quotation"
        value={this.state.quoteString}
        onChange={this.stateChange}
      />
      <input
        type="submit"
        value="Submit"
        onClick={this.submitQuote}
      />
      <h5> {this.state.notification} </h5>
    </div>
    )
  }
}

export default Quote
