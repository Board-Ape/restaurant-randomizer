import { combineReducers } from 'redux';
import eventNameReducer from './eventNameReducer';
import makeRestaurantsReducer from './makeRestaurantsReducer';


const rootReducer = combineReducers({
  eventName: eventNameReducer,
  restaurantNames: makeRestaurantsReducer
})

export default rootReducer;
