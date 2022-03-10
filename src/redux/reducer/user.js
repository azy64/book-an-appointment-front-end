import axios from 'axios';

const baseUrl = 'https://book-doctor-appointment2.herokuapp.com';

const initialState = {
  name: '',
  email: '',
  loggedIn: false,
  userId: '',
  signedUp: false,
};

// Constants
const SIGN_UP = 'SIGN_UP';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Action Creators
export const signUp = (payload) => ({
  type: SIGN_UP,
  payload,
});

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const logout = (payload) => ({
  type: LOGOUT,
  payload,
});

// Reducesrs
export const userReducertrying = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_UP:
      return {
        ...payload,
      };
    case LOGIN:
      return payload;
    default:
      return state;
  }
};

const hitAPIWithSignupDetails = (details) => async (dispatch) => {
  const {
    name, email, password, phoneNumber,
  } = details;
  try {
    await axios({
      method: 'post',
      url: 'https://book-doctor-appointment2.herokuapp.com/users',
      data: {
        user: {
          email,
          password,
          name,
          phone_number: phoneNumber,
        },
      },
    });

    dispatch(
      signUp({
        name: '',
        email: '',
        loggedIn: false,
        userId: '',
        signedUp: 'up',
      }),
    );
  } catch (error) {
    dispatch(
      signUp({
        name: '',
        email: '',
        loggedIn: false,
        userId: '',
        signedUp: 'down',
      }),
    );
  }
};

export const hitAPIWithSigninDetails = (details) => async (dispatch) => {
  const { email, password } = details;
  try {
    const signUpRespons = await fetch(`${baseUrl}/users/sign_in?email=${email}&password=${password}`);
    console.log(signUpRespons);

    const { data, headers } = signUpRespons;
    const { user } = data;
    const { authorization } = headers;

    const mainUser = {
      name: user.name,
      email: user.email,
      loggedIn: 'in',
      userId: user.id,
      signedUp: true,
    };

    localStorage.setItem('userAuth', JSON.stringify(authorization));
    localStorage.setItem('leaseAHomeUser', JSON.stringify(mainUser));

    dispatch(login(mainUser));
  } catch (error) {
    dispatch(
      login({
        name: '',
        email: '',
        loggedIn: 'err',
        userId: '',
        signedUp: false,
      }),
    );
  }
};

// export const hitAPIWithLogoutDetails = (details) => async (dispatch) => {
//   const { userAuth } = details;
//   try {
//     await fetch(
//       `${process.env.REACT_APP_LOGOUT_ENDPOINT}`,
//       {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `${userAuth}`,
//         },
//       },
//     );

//     dispatch(signUp({
//       ...initialState,
//       loggedIn: 'out',
//       signedUp: false,
//     }));

//     localStorage.removeItem('userAuth');
//     localStorage.removeItem('leaseAHomeUser');
//   } catch (error) {
//     dispatch(
//       signUp({
//         name: '',
//         email: '',
//         loggedIn: 'out',
//         userId: '',
//         signedUp: false,
//       }),
//     );
//   }
// };

export default hitAPIWithSignupDetails;
