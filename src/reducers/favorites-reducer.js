const favorites = (store = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...store, action.favorite];
  case 'DELETE_FAVORITE':
    return [...store.filter(favorite =>
      favorite.restaurants.name !==
      action.favorite.restaurants.name)
    ];
  default:
    return store;
  }
};

export default favorites;
