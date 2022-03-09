import { Booking } from '../constants/Constants';

const initiaState = {
  reservations: [],
  reservation: {},
};

const reservationReducer = (state = initiaState, { type, payload }) => {
    if (type === Booking.ALL_RESERVATIONS) {
      return {
        ...state,
        reservations: [payload],
      };
    }
    if (type === Booking.ONE_RESERVATION) {
      return {
        ...state.reservation, payload,
      };
    }
    return state;
  };