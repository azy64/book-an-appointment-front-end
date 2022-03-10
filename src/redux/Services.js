import axios from 'axios';

const baseUrl = 'https://book-doctor-appointment2.herokuapp.com';

export const fetchDoctors = async () => {
  try {
    const response = await axios.get(`${baseUrl}/doctors/`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const getDetailDoctor = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/doctors/${id}`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const fetchReservations = async (userid) => {
  try {
    const response = await axios.get(`${baseUrl}/users/${userid}/reservations`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const ONEReservation = async (userid, id) => {
  try {
    const response = await axios.get(`${baseUrl}/users/${userid}/reservations/${id}`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const createReservation = async (userid, reservation) => {
  const { date } = reservation;
  const resp = await fetch(`${baseUrl}/users/${userid}/reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      reservation_time: date,
      date: 12,
      user: userid,
      doctor: 1,

    }),
  });
  const data = await resp.text();
  return data;
};

export const registerUser = async (user) => {
  console.log(user, 'user api');
  const { email, name, password } = user;
  const resp = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        email,
        name,
        password,
        phone_number: '1234123456',
      },
    }),
  });
  const data = await resp.json();
  console.log(data, 'response');
  return data;
};

export const loginUser = async (user) => {
  const { email, password } = user;
  const resp = await fetch(`${baseUrl}/users/sign_in?email=${email}&password=${password}`);
  const data = await resp.text();
  console.log(data, 'response');
  return data;
};
