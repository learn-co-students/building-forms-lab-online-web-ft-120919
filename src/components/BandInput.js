// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandInput extends Component {
  state = {name: ''}

  handleOnChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    console.log('form submit!')
    e.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
        Band Input Form
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
