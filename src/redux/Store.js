import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducer';
import { fetchAllDoctors } from './actions/DoctorActions';

const store = createStore(reducers,
  applyMiddleware(thunk, logger));
store.dispatch(fetchAllDoctors());

export default store;
