/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { fetchAllReservations, singleReservation } from '../../redux/actions/ResevationActions';
import styles from '../scss/Reservation.module.scss';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservationdatas = useSelector((state) => state.reservationReducer);
  const { userId } = JSON.parse(window.localStorage.getItem('bookDoctorUser'));
  const userID = userId || 1;
  const { reservations } = reservationdatas;

  useEffect(() => {
    dispatch(fetchAllReservations(userID));
  }, []);

  if (!reservations[0]) {
    return (
      <div className="ScaleLoader">
        <ScaleLoader color="rgba(161, 161, 161, 0.541)" loading="true" css={{ fontSze: '3.5rem' }} size={150} />
      </div>
    );
  }

  return (
    <section className={styles['reservations-section']}>
      <h2>My Reservations</h2>
      <ul className={styles['reservation-lists']}>
        {
          reservations[0].map((item) => {
            const { name, email } = item.doctor;
            const { reservation_time, id } = item.reservation;
            // const username = item.user.name;
            const userid = item.user.id;
            return (
              <div className={styles.reservation} key={id}>
                <h5 className={styles['sub-title']}>reservation</h5>
                <p>
                  reservation time:
                  {' '}
                  {reservation_time}
                </p>
                <p>
                  doctor name:
                  {' '}
                  {name}
                </p>
                <p>
                  doctor email:
                  {' '}
                  {email}
                </p>
                <Link to={`${item.id}`} onClick={() => dispatch(singleReservation(userID, id))}>
                  <button type="button">view reservation</button>
                </Link>
              </div>
            );
          })
        }
      </ul>
    </section>
  );
};

export default Reservations;
