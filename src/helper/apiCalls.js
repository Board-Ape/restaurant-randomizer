import { API_KEY } from '../settings.js';
import { connect } from 'react-redux';

export const getNearbyRestaurants = async () => {
  try {
    const initialFetch = await fetch('https://developers.zomato.com/api/v2.1/search?lat=39.7392&lon=-104.9903&radius=8&sort=rating&order=desc', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'user-key': API_KEY
      }
    });
    const responseData = await initialFetch.json();
    const nearbyRestaurants = await responseData.restaurants.map((topRest) => topRest.restaurant.name);

    return nearbyRestaurants;
  } catch (type) {
    return Error('Fetch Restaurants Failed');
  }
};

export const postCurrentLocation = async (locationObject) => {
  try {
    const initialFetch = await fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDOxCWI5v69dw3ljge9fiJHdsC8BGrMbvE', {
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

const mapStateToProps = (store) => {
  return {
    restaurantNames: store.restaurantNames,
    currentLocation: store.currentLocation
  };
};

export default connect(mapStateToProps, undefined)(getNearbyRestaurants);
