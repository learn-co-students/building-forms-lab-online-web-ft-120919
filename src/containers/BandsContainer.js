import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addBand} from '../actions/bands.js'
import BandInput from '../components/BandInput.js'

class BandsContainer extends Component {

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map(band => <li>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

const mapDispatchToProps = (dispatch) => {
  return {addBand: (band) => dispatch(addBand(band))}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
