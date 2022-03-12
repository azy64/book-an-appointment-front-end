import React from 'react';
import { useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';

const DetailReservation = () => {
  const reservationdatas = useSelector((state) => state.reservationReducer);
  const { reservation } = reservationdatas;
  if (!reservation) {
    return (
      <div className="ScaleLoader">
        <ScaleLoader color="rgba(161, 161, 161, 0.541)" loading="true" css={{ fontSze: '3.5rem' }} size={150} />
      </div>
    );
  }
  return (
    <div>DetailReservation</div>
  );
};

export default DetailReservation;
