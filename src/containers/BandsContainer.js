import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput.js'
import { addBand } from '../actions/bandActions.js'

class BandsContainer extends Component {

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <div>
          
        </div>
      </div>
    )
  }
}

export default connect(null, { addBand })(BandsContainer)
