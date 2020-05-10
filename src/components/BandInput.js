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
  handleSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  }
  render() {
    return(
      <div>
        <form onSubmit={e=>this.handleSubmit(e)}>
          <input type="text" name="name" value={this.state.name}onChange={(e)=>this.handlChange(e)}/>
          <input type="submit" value="Add Band"/>
        </form>
      </div>
    )
  }
}

export default BandInput
