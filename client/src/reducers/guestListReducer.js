import { FETCH_GUESTS } from '../actions/types'

export const guestListReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_GUESTS:
      console.log(`the payload inside of guestListReducer is`)
      console.log(action.payload)
      return action.payload || false;
    default:
      return state;
  }
}