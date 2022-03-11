import React from 'react';
import { useSelector } from 'react-redux';

const DetailReservation = () => {
  const reservationdatas = useSelector((state) => state.reservationReducer);
  const { reservation } = reservationdatas;
  if (!reservation) {
    return (
      <h6>Loading ...</h6>
    );
  }
  return (
    <div>DetailReservation</div>
  );
};

export default DetailReservation;
