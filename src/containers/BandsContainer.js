import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  constructor() {
    super()
  }//constructor

  renderBands() {
    return this.props.bands.map( 
      band => <li>{band.name}</li>
    )
  }//renderBands

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <h2>Bands!</h2>
        <ul>{this.renderBands()}</ul>
      </div>
    )
  }//render
}//class

const mapStateToProps = (state) => {
  return {
    bands: state.bands 
  }
}//mapStateToProps

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: formData => dispatch({
      type: 'ADD_BAND',
      band: formData
    })
  }//return
}//mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
