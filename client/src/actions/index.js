import axios from 'axios';
import { FETCH_GUESTS } from './types';

export const fetchGuests = () => async (dispatch) => {
  const res = await axios.get('/guest-list');
  dispatch({ type: FETCH_GUESTS, payload: res });
}