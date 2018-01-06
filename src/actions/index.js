import { getNearbyRestaurants, postCurrentLocation } from '../helper/apiCalls';

export const addEventName = (name, id) => ({
  type: 'ADD_EVENT_NAME',
  name,
  id
});

export const postLocation = () => async (dispatch) => {
  const currentLocation = await postCurrentLocation();
  dispatch(fetchLocationSuccess(currentLocation));
}

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

// export const displayLocation = (location) => ({
//   type: 'LOCATION_DISPLAY',
//   location
// })

// export const getLocation = () => async (dispatch) => {
//   const currentLocation = await getCurrentCoords();
//   dispatch(locationCoordinates(currentLocation));
// }

// export const locationCoordinates = (location) => ({
//   type: 'GET_LOCATION',
//   location
// })

// export const getLocation = () => {
//   const geolocation = navigator.geolocation;
//
//   const location = new Promise((resolve, reject) => {
//     if (!geolocation) {
//       reject(new Error('Not Supported'));
//     }
//
//     geolocation.getCurrentPosition((position) => {
//       resolve(position);
//     }, () => {
//       reject (new Error('Permission denied'));
//     });
//   });
//
//   return {
//     type: "GET_LOCATION",
//     location
//   }
// };
