import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewReservations } from '../../redux/actions/ResevationActions';
import styles from '../scss/Appointment.module.scss';

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
    <section className={styles['book-appointment-section']}>
      <h2 className={styles.title}>Doctor book appointment</h2>
      <form onSubmit={newReservation}>
        <div className={styles['form-group']}>
          <h3 className={styles['sub-title']}>Choose a Specific Day</h3>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <div className={styles['btn-appointment']}>
          <button type="submit">Book Now</button>
        </div>

      </form>
    </section>
  );
};

export default BookAppointment;
