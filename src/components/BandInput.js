// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props){
    super(props)
  }
  state={name:''}
  handlChange(e){
    this.setState({
      name: e.target.value
    })
  }
  render() {
    console.log(this.props)
    return(
      <div>
        <form onSubmit={()=>this.props.addBand(this.state)}>
          <input type="text" name="name" value={this.state.name}onChange={(e)=>this.handlChange(e)}/>
          <input type="submit" value=""/>
        </form>
      </div>
    )
  }
}

export default BandInput
