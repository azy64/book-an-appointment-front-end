import { Booking } from '../constants/Constants';
import { fetchDoctors, getDetailDoctor } from '../Services';

export const fetchAllDoctors = () => (async (dispatch) => {
  const doctors = await fetchDoctors();
  dispatch({
    type: Booking.ALL_DOCTORS,
    payload: doctors,
  });
});

export const singleDoctor = (id) => (async (dispatch) => {
  const data = await getDetailDoctor(id);
  dispatch({
    type: Booking.ONE_DOCTOR,
    payload: data,
  });
});

export const docId = (id) => ({
  type: Booking.GET_DOC_ID,
  payload: id,
});
