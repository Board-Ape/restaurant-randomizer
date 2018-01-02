import { API_KEY } from '../settings.js';

export const getNearbyRestaurants = async () => {
  try {
    const headers = new Headers()
    headers.append('user-key', API_KEY)
    const init = {
      method: 'GET',
      headers
    }
    const initialFetch = await fetch('https://developers.zomato.com/api/v2.1/search?lat=39.7392&lon=-104.9903&radius=8&sort=rating&order=desc', init);
    const responseData = await initialFetch.json();
    const nearbyRestaurants = await responseData.restaurants.map((topRest) => topRest.restaurant.name);

    return nearbyRestaurants;
  } catch (type) {
    return Error('Fetch Failed');
  }
};

export const getCurrentCoords = async () => {
  try {
    const geolocation = navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  } catch (type) {
    return Error('Fetch Failed');
  }
}
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
