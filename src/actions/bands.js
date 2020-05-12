export const addBand = (band) => {
  console.log('action creator: addBand!')
  return {type: 'ADD_BAND', payload: band}
}
