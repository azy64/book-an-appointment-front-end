import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewReservations } from '../../redux/actions/ResevationActions';
import styles from '../scss/Login.module.scss';

const BookAppointment = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState('');
  const newReservation = (e) => {
    e.preventDefault();
    if (date === '') return;
    const newUser = {
      date,
    };
    dispatch(createNewReservations(1, newUser));
    setDate('');
  };
  return (
    <section className="book-appointment">
      <h2>hello from book appointment</h2>
      <form onSubmit={newReservation}>
        <h4>Member Login</h4>
        <div className={styles['form-group']}>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>

        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default BookAppointment;
