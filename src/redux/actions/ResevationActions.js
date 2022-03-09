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