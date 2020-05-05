// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })

  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.name)
    this.props.addBand(this.state.name)
  }

  render() {
    return (
      <div>
        Band Input:
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default BandInput
