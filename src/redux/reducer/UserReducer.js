/* eslint-disable import/prefer-default-export */
import { Auth } from '../constants/Constants';

const initialstate = {
  user: [],
  isLogged: false,
};

export const UserReducer = (state = initialstate, action) => {
  if (action.type === Auth.REGISTER_SUCCESS) {
    console.log(action.payload, 'action payload');
    return {
      isLogged: true,
      user: [action.payload],
    };
  }
  if (action.type === Auth.LOGIN_SUCCESS) {
    return {
      isLogged: true,
    };
  }

  return state;
};
