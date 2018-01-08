import { API_KEY, GOOGLE_API_KEY } from '../../settings.js';
import {cleanData} from '../cleanData/cleanData-Restaurant';

export const getNearbyRestaurants = async (lat, lng) => {
  try {
    const initialFetch = await fetch(`https://developers.zomato.com/api/v2.1/search?lat=${lat}lon=${lng}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'user-key': API_KEY
      }
    });
    const responseData = await initialFetch.json();
    const restaurantArray = await responseData.restaurants;
    const cleanRestaurantObject = await cleanData(restaurantArray);

    return cleanRestaurantObject;
  } catch (type) {
    return Error('Fetch Restaurants Failed');
  }
};

export const postCurrentLocation = async (locationObject) => {
  try {
    const initialFetch = await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_API_KEY}`, {
      method:'POST',
      body: JSON.stringify(locationObject),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const responseObject = await initialFetch.json();
    const currentLocation = await responseObject.location;

    return currentLocation;
  } catch (type) {
    return Error('Fetch Location Failed');
  }
};
