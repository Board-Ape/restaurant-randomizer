import { combineReducers } from 'redux';
import eventNameReducer from './eventNameReducer';
import makeRestaurantsReducer from './makeRestaurantsReducer';
import locationReducer from './locationReducer';


const rootReducer = combineReducers({
  eventName: eventNameReducer,
  restaurantNames: makeRestaurantsReducer,
  location: locationReducer
})

export default rootReducer;
