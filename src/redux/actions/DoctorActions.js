import { Booking } from '../constants/Constants';
import { fetchDoctors, getDetailDoctor } from '../Services';

export const fetchAllDoctors = () => (async (dispatch) => {
  const doctors = await fetchDoctors();
  console.log(doctors, 'payload');
  dispatch({
    type: Booking.ALL_DOCTORS,
    payload: doctors,
  });
});

export const singleDoctor = (id) => (async (dispatch) => {
  const data = await getDetailDoctor(id);
  console.log(data, 'single doc');
  dispatch({
    type: Booking.ONE_DOCTOR,
    payload: data,
  });
});
