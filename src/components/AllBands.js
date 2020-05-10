import React, { Component } from 'react'

export default class AllBands extends Component {
    render() {
    let bands = this.props.bands.map((band,index)=><li key={index}>{band.name}</li>)
        console.log(bands)
        return (
            <ul>
                {bands}
            </ul>
        )
    }
}
