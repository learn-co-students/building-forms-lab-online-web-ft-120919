export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      console.log(action)
      // console.log(state.bands)
      return state.bands.concat(action.band)
    default:
      return state
  }
};
