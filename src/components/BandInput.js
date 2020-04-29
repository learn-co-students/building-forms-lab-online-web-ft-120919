// Add BandInput component

import React, { Component } from 'react'
import { addBand } from '../actions'
import { connect } from 'react-redux';

class BandInput extends Component {

  state = {
    name: '',
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const band = {...this.state}
    console.log('state', this.state)
    console.log('band', band)
    this.props.addBand(band)
    console.log(this.props.addBand(band))
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={(event)=>this.handleOnSubmit(event)}>

          <input 
          type="text" 
          onChange={(event) => this.handleOnChange(event)}
          name="name"
          value={this.state.name}
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

// export default BandInput
export default connect(null, { addBand })(BandInput);
