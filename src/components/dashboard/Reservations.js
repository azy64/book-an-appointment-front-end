/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllReservations, singleReservation } from '../../redux/actions/ResevationActions';

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
    <section className="reservations">
      <h2>My Reservations</h2>
      <div>
        {
          reservations[0].map((item) => {
            const { name, email } = item.doctor;
            const { reservation_time, id } = item.reservation;
            // const username = item.user.name;
            const userid = item.user.id;
            return (
              <div key={id}>
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
                <Link to={`${item.id}`} onClick={() => dispatch(singleReservation(userid, id))}>
                  <button type="button">view reservation</button>
                </Link>
              </div>
            );
          })
        }
      </div>
    </section>
  );
};

export default Reservations;
