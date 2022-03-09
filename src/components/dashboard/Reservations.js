/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllReservations, singleReservation } from '../../redux/actions/ResevationActions';

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

  return (
    <section className="reservations">
      <h2>My Reservations</h2>
      <div>
        {
          reservations[0].map((item) => (
            <div key={item.id}>
              <p>reservation</p>
              <Link to={`${item.id}`} onClick={() => dispatch(singleReservation(1, item.id))}>
                <button type="button">view reservation</button>
              </Link>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Reservations;
