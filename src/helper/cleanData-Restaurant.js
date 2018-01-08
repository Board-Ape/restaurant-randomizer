export const cleanData = (restaurantArray) => {
  return restaurantArray.map((restaurant) => {
    return {
      name: restaurant.restaurant.name,
      data: {
        Cuisines: restaurant.restaurant.cuisines,
        Address: restaurant.restaurant.location.address,
        averagePrice: restaurant.restaurant.price_range,
        costForTwo: restaurant.restaurant.average_cost_for_two,
        Rating: restaurant.restaurant.user_rating.aggregate_rating
      }
    };
  });
};
