import { combineReducers } from 'redux';
import { UserReducer } from './UserReducer';
import doctorReducer, { docIdReducer } from './DoctorReducer';
import reservationReducer from './ReservationReducer';

const reducers = combineReducers({
  UserReducer,
  doctorReducer,
  reservationReducer,
  docIdReducer,
});

export default reducers;
