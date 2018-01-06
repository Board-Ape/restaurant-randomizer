const currentLocation = (state=[], action) => {
  switch(action.type) {
    case 'FETCH_LOCATION_SUCCESS':
      return [...state, action.location];
    default:
      return state
  }
}

export default currentLocation;
