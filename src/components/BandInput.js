// Add BandInput component
import React, { Component } from 'react'
import connect from 'react-redux/lib/connect/connect'
import mapDispatchToProps from 'react-redux/lib/connect/mapDispatchToProps'

export default class BandInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }//constructor

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }//handleChange

  handleSubmit = (event) => {
    event.preventDefault()
    let newBand = {...this.state}
    this.props.addBand(newBand)
    this.setState({
      name: ''
    })
  }//handleSubmit

  render() {
    return(
      <div>
        <h2>Enter a Band</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="band">Band Name:</label>
          <input type="text" name="band" value={this.state.name} onChange={event => this.handleChange(event)}/>
        </form>
      </div>
    )
  }//render
}//class

// mapDispatchToProps = (dispatch) => {
//   return {
//     addBand: formData => dispatch({
//       type: 'ADD_BAND',
//       band: formData
//     })
//   }//return
// }//mapDispatchToProps

// export default connect(null, mapDispatchToProps)(BandInput)
