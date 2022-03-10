/* eslint-disable import/prefer-default-export */
import { Auth } from '../constants/Constants';
import { registerUser, loginUser } from '../Services';

export const registerNewUser = (user) => (async (dispatch) => {
  console.log(user, 'user log');
  const reservation = await registerUser(user);
  console.log(reservation, 'payload');
  dispatch({
    type: Auth.REGISTER_SUCCESS,
    payload: reservation,
  });
});

export const loginNewUser = (user) => (async (dispatch) => {
  const reservation = await loginUser(user);
  dispatch({
    type: Auth.LOGIN_SUCCESS,
    payload: reservation,
  });
});
