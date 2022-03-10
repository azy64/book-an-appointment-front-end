import { Booking } from '../constants/Constants';
import { fetchReservations, ONEReservation, createReservation } from '../Services';

export const fetchAllReservations = (userid) => (async (dispatch) => {
  const reservation = await fetchReservations(userid);
  console.log(reservation, 'payload');
  dispatch({
    type: Booking.ALL_RESERVATIONS,
    payload: reservation,
  });
});

export const createNewReservations = (userid, data) => (async (dispatch) => {
  console.log(userid, data, 'payload');
  const reservation = await createReservation(userid, data);
  console.log(reservation, 'payloadss');
  dispatch({
    type: Booking.CREATE_RESERVATION,
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

export const getDoctorId = (id) => ({
  type: Booking.ONE_DOCTOR,
  payload: id,
});
