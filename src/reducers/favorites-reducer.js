const favorites = (store = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
  console.log(action.favorites.restaurants);
    return [...store, action.favorites.restaurants];
  case 'DELETE_FAVORITE':
    return [...store.filter(fav => {
      fav.name !==
      action.favorites.restaurants.name;
    })
    ];
  default:
    return store;
  }
};

export default favorites;
