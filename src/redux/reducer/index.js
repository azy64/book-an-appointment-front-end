import { combineReducers } from 'redux';
// import { UserReducer } from './UserReducer';
import { userReducertrying } from './user';
import doctorReducer from './DoctorReducer';
import reservationReducer from './ReservationReducer';

const reducers = combineReducers({
  UserReducer: userReducertrying,
  doctorReducer,
  reservationReducer,
});

export default reducers;
