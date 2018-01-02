const locationReducer = (state=[], action) => {
  switch(action.type) {
    case 'GET_LOCATION':
      return [...state, action.location];
    case 'LOCATION_DISPLAY':
      return [...state, action.location];
    default:
      return state
  }
}

export default locationReducer;
