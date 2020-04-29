import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { addBand } from '../actions/index'
import BandCard from '../components/BandCard'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {




    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        BandsContainer
        <BandCard bands={this.props.bands} />
        {/* {bands.map(band => <BandCard band={band}/>)} */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return (
    {addBand: band => dispatch({type: 'ADD_BAND', band})}
  )
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addRestaurant: (newRestaurant) => {
//       dispatch(addRestaurant(newRestaurant))
//     }
//   };
// };

const mapStateToProps = ({bands})=> ({
      bands
})

// const mapStateToProps = state => {
//   return {
//       bands: state.bands
//   }
// }




export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
// export default BandsContainer