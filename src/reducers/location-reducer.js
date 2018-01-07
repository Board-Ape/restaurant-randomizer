const currentLocation = (store=[], action) => {
  switch (action.type) {
  case 'FETCH_LOCATION_SUCCESS':
    return [...store, action.location];
  default:
    return store;
  }
};

export default currentLocation;
