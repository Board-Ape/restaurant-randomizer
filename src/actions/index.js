import {getNearbyRestaurants} from '../helper/apiCalls';

export const addEventName = (name, id) => ({
  type: 'ADD_EVENT_NAME',
  name,
  id
})

export const getRestaurants = () => async (dispatch) => {
  const nearbyRestaurants = await getNearbyRestaurants();
  console.log('Action getRestaurants',nearbyRestaurants);
  dispatch(makeRestaurantArray(nearbyRestaurants));
}

export const makeRestaurantArray = (restaurants) => ({
  type: 'MAKE_RESTAURANT_ARRAY',
  restaurants
})
