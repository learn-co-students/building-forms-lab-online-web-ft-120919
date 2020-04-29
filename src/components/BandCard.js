import React from 'react'

const BandCard = ({bands}) =>{

    return bands.map(band => <li>{band.name}</li>)
    
{/* <li>
    {band.name}
</li> */}
}

export default BandCard