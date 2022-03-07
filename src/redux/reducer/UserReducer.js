/* eslint-disable import/prefer-default-export */
import { Auth } from '../constants/Constants';

const initialstate = {
  isLogged: false,
};

export const UserReducer = (state = initialstate.isLogged, action) => {
  if (action.type === Auth.SIGN_IN) {
    return true;
  }

  return state;
};
