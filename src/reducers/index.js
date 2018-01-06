import { combineReducers } from 'redux';
import eventName from './event-reducer';
import makeRestaurantsReducer from './makeRestaurantsReducer';
import currentLocation from './location-reducer';


const rootReducer = combineReducers({
  eventName,
  restaurantNames: makeRestaurantsReducer,
  currentLocation
})

export default rootReducer;
