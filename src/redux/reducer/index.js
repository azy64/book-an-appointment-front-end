import { combineReducers } from 'redux';
import { UserReducer } from './UserReducer';
import doctorReducer from './DoctorReducer';
import reservationReducer from './ReservationReducer';

const reducers = combineReducers({
  UserReducer,
  doctorReducer,
  reservationReducer,
});

export default reducers;