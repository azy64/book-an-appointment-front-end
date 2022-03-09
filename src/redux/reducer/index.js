import { combineReducers } from 'redux';
import { UserReducer } from './UserReducer';
import doctorReducer from './DoctorReducer';

const reducers = combineReducers({
  UserReducer,
  doctorReducer,
});

export default reducers;
