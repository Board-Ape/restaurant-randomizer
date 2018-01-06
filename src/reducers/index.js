import { combineReducers } from 'redux';
import eventName from './event-reducer';
import restaurantNames from './restaurant-reducer';
import currentLocation from './location-reducer';

const rootReducer = combineReducers({
  eventName,
  restaurantNames,
  currentLocation
})

export default rootReducer;
