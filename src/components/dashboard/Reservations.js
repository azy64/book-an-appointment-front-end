import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllReservations, singleReservation } from '../../redux/actions/ReservationActions';

const Reservations = () => (
  <section className="reservations">
    <h2>Hello Reservations</h2>
  </section>
);

export default Reservations;
