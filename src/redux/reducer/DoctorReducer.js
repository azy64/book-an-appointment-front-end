import { Booking } from '../constants/Constants';

const initiaState = {
  doctors: [],
  doctor: {},
};

const doctorReducer = (state = initiaState, { type, payload }) => {
  if (type === Booking.ALL_DOCTORS) {
    return {
      ...state,
      doctors: payload,
    };
  }
  if (type === Booking.ONE_DOCTOR) {
    return {
      ...state,
      doctor: payload,
    };
  }
  return state;
};

export default doctorReducer;
