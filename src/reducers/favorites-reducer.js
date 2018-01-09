const favorites = (store = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...store, action.favorites];
  case 'DELETE_FAVORITE':
    return [...store.filter(favorite =>
      favorite.restaurants.name !==
      action.favorites.restaurants.name)
    ];
  default:
    return store;
  }
};

export default favorites;
