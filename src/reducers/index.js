import { combineReducers } from 'redux';
import eventName from './event-reducer';
import restaurantNames from './restaurant-reducer';
import currentLocation from './location-reducer';
import favorites from './favorites-reducer';

const rootReducer = combineReducers({
  eventName,
  restaurantNames,
  currentLocation,
  favorites
});

export default rootReducer;
