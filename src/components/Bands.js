import React from 'react'

const Bands = props => {
  const bands = props.bands.map((band, index) => {
    return <li key={index}>{band.name}</li>
  })

  return (
    <div>
      <h1>BANDS</h1>
      {bands}
    </div>
  )
}

export default Bands
