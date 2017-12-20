import { combineReducers } from 'redux';
import eventNameReducer from './eventNameReducer';

const rootReducer = combineReducers({
  eventName: eventNameReducer
})

export default rootReducer;
