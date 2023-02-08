import axios from 'axios';
import { FETCH_GUESTS } from './types';

export function fetchGuests() {
  return async (dispatch) => {
    try {
      const res = await axios.get('/guest-list');
      dispatch({ type: FETCH_GUESTS, payload: res.data })
    } catch (error) {
      console.log(error)
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