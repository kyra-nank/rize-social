import { combineReducers } from 'redux'
import { addGuestReducer, guestListReducer } from './guestListReducer'
// import guestReducer from './guestReducer';

export default combineReducers({
  guestList: guestListReducer,
  addGuest: addGuestReducer
})