const favorites = (store = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...store, action.favorites];
  case 'DELETE_FAVORITE':
    // return [...store.filter(fav =>
    //   fav.restaurants.name !==
    //   action.favorites.restaurants.name)
    // ];
    return [];
  default:
    return store;
  }
};

export default favorites;
