import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput.js'

class BandsContainer extends Component {

  render() {
    const { bands } = this.props
    return (
      < div >
        <BandInput addBand={this.props.addBand} />
        <div>
          {bands.map(band => <li key={band.name}>{band.name}</li>)}
        </div>
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({ type: 'ADD_BAND', band })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
