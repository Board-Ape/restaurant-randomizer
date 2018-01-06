import { getNearbyRestaurants, postCurrentLocation } from '../helper/apiCalls';

export const addEventName = (name, id) => ({
  type: 'ADD_EVENT_NAME',
  name,
  id
});

export const postLocation = () => async (dispatch) => {
  const currentLocation = await postCurrentLocation();
  dispatch(fetchLocationSuccess(currentLocation));
};

export const fetchLocationSuccess = (location) => ({
  type: 'FETCH_LOCATION_SUCCESS',
  location
});

export const getRestaurants = () => async (dispatch) => {
  const nearbyRestaurants = await getNearbyRestaurants();
  dispatch(makeRestaurantArray(nearbyRestaurants));
};

export const makeRestaurantArray = (restaurants) => ({
  type: 'MAKE_RESTAURANT_ARRAY',
  restaurants
});
