import axios from 'axios'
import { ADD_GUEST, FETCH_GUESTS, RSVP } from './types'

export function fetchGuests() {
  return async (dispatch) => {
    try {
      // console.log("trying to fetch guest list")
      const res = await axios.get('/guest-list')
      dispatch({ type: FETCH_GUESTS, payload: res.data })
    } catch (error) {
      console.log(error)
    }

  }
}

export function rsvpGuest(inputPin) {
  return async (dispatch) => {
    try {
      console.log("trying to check rsvp")
      const res = await axios.post('/rsvp', inputPin)
      dispatch({ type: RSVP, payload: res.data })
      return window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
}

export function addGuest(payload) {
  return async (dispatch) => {
    try {
      const res = await axios.post('/add-guest', {
        data: payload,
      })
      dispatch({ type: ADD_GUEST, payload: res.data })
    } catch (error) {
      dispatch({ type: ADD_GUEST, payload: error.response.data })
    }
  }
}

// export const fetchGuests = () => async (dispatch) => {
//   const res = await axios.get('/guest-list');
//   console.log(res)
//   dispatch({ type: FETCH_GUESTS, payload: res.data });
// }

// export const fetchGuests = () => {
//   return function (dispatch) {
//     axios
//       .get('/guest-list')
//       .then(res => dispatch({ type: FETCH_GUESTS, payload: res }))
//   }
// }