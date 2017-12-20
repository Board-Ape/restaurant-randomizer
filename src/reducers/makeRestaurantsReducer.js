const makeRestaurantsReducer = (store = [], action) => {
  switch (action.type) {
    case 'MAKE_RESTAURANT_ARRAY':
      return [...store, ...action.restaurants]

  default:
    return store;
  }
};

export default makeRestaurantsReducer; 
