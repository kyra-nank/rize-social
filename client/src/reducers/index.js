import { combineReducers } from 'redux';
import { guestListReducer } from './guestListReducer';
// import guestReducer from './guestReducer';

export default combineReducers({
  guestList: guestListReducer
  // guestInfo: guestReducer
});