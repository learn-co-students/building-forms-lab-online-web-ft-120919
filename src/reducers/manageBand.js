export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case "ADD_BAND":
      state={bands:[...state.bands, action.band]}
      break;
  
    default:
      state=state
      break
  }
  return state
};
