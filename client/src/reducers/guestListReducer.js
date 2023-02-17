import { ADD_GUEST, FETCH_GUESTS, RSVP } from '../actions/types'

export const guestListReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_GUESTS:
      return action.payload || false
    case RSVP:
      console.log(`the rsvp payload inside of guestListReducer is`)
      console.log(action.payload)
      return action.payload || "test"
    default:
      return state
  }
}

export const addGuestReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_GUEST:
      return action.payload
    default:
      return state
  }
} 