import { combineReducers } from 'redux';
import EventReducer from './eventReducer';
import ActionEventReducer from './reducerActiveEvent';

const allReducers = combineReducers({
  events: EventReducer,
  activeEvent: ActionEventReducer

});

export default allReducers;
