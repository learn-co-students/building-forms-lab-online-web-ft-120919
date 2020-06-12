import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
                    
            <BandInput addBand={this.props.addBand}/>
            <Bands bands={this.props.bands}/>
      
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
