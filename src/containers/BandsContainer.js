import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'
import addBand from '../actions/manageBandActions'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={ this.props.addBand } />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { bands: state.bands }
}

export default connect(mapStateToProps, { addBand } )(BandsContainer)
