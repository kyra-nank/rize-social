import { ADD_GUEST, FETCH_GUESTS, RSVP } from '../actions/types'

export const guestListReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_GUESTS:
      // console.log(`the payload inside of guestListReducer is`)
      // console.log(action.payload)
      return action.payload || false
    case RSVP:
      console.log(`the rsvp payload inside of guestListReducer is`)
      console.log(action.payload)
      return action.payload || "test"
    // case ADD_GUEST:
    //   console.log('action-payload--------------->', action.payload)
    //   return action.payload
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