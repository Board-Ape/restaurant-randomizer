const locationReducer = (state=[], action) => {
  switch(action.type) {
    case 'LOCATION_DISPLAY':
      return [...state, action.location];
    default:
      return state
  }
}

export default locationReducer;
