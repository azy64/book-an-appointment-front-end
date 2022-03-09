import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllReservations, singleReservation } from '../../redux/actions/ReservationActions';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservationdatas = useSelector((state) => state.reservationReducer);
  const { reservations } = reservationdatas;
  useEffect(() => {
    dispatch(fetchAllReservations(1));
  }, []);

  if (!reservations[0]) {
    return (
      <h2>Loading...</h2>
    );
  }
};