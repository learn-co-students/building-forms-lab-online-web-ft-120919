
const addBand = (obj) => {
  let action = {
    type: 'ADD_BAND',
    ...obj
  }
  console.log('creating action object: ', action)
  return action
} 

export default addBand