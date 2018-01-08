export const cleanData = (restaurantArray) => {
  return restaurantArray.map((restaurant) => {
    return {
      name: restaurant.restaurant.name,
      data: {
        Cuisines: restaurant.restaurant.cuisines,
        Address: restaurant.restaurant.location.address,
        Rating: restaurant.restaurant.user_rating.aggregate_rating
      }
    };
  });
};
