import eventsReducer from './events_reducer.js';

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  events: eventsReducer
});

export default rootReducer;
