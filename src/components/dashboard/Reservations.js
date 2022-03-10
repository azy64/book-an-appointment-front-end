/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllReservations, singleReservation } from '../../redux/actions/ResevationActions';
import styles from '../scss/Reservation.module.scss';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservationdatas = useSelector((state) => state.reservationReducer);
  const { reservations } = reservationdatas;
  console.log(reservations, 'reservation');
  useEffect(() => {
    dispatch(fetchAllReservations(1));
  }, []);

  if (!reservations[0]) {
    return (
      <h2>Loading...</h2>
    );
  }

  return (
    <section className={styles['reservations-section']}>
      <h2>My Reservations</h2>
      <ul className={styles['reservation-lists']}>
        {
          reservations[0].map((item) => (
            <div className={styles.reservation} key={item.id}>
              <h5 className={styles['sub-title']}>reservation</h5>
              <Link to={`${item.id}`} onClick={() => dispatch(singleReservation(1, item.id))}>
                <button type="button">view reservation</button>
              </Link>
            </div>
          ))
        }
      </ul>
    </section>
  );
};

export default Reservations;
