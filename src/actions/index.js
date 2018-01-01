import { getNearbyRestaurants } from '../helper/apiCalls';

export const addEventName = (name, id) => ({
  type: 'ADD_EVENT_NAME',
  name,
  id
})

export const getRestaurants = () => async (dispatch) => {
  const nearbyRestaurants = await getNearbyRestaurants();
  dispatch(makeRestaurantArray(nearbyRestaurants));
}

export const makeRestaurantArray = (restaurants) => ({
  type: 'MAKE_RESTAURANT_ARRAY',
  restaurants
})

// export const getLocation = () => async (dispatch) => {
//   const currentLocation = await getCurrrentLocation();
//   dispatch(displayLocation(getCurrrentLocation));
// }

export const displayLocation = (location) => ({
  type: 'LOCATION_DISPLAY',
  location
})
