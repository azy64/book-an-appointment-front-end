import { Booking } from '../constants/Constants';
import { fetchReservations, ONEReservation } from '../Services';

export const fetchAllReservations = (userid) => (async (dispatch) => {
  const reservation = await fetchReservations(userid);
  console.log(reservation, 'payload');
  dispatch({
    type: Booking.ALL_RESERVATIONS,
    payload: reservation,
  });
});

export const singleReservation = (userid, id) => (async (dispatch) => {
  const data = await ONEReservation(userid, id);
  dispatch({
    type: Booking.ONE_DOCTOR,
    payload: data,
  });
});
