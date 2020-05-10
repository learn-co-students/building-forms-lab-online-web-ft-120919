import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
// import {addBand} from '../reducers/actions/band'

class BandsContainer extends Component {
  addBand(){
    debugger
  }
  render() {
    return(
      <div>
        <BandInput addBand={this.addBand}/>
      </div>
    )
  }
}

export default connect(null)(BandsContainer)
