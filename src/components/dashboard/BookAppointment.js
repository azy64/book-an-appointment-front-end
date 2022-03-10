import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewReservations } from '../../redux/actions/ResevationActions';
import styles from '../scss/Login.module.scss';

const BookAppointment = () => {
  const dispatch = useDispatch();
  const docid = useSelector((state) => state.docIdReducer);
  const { payload } = docid;
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const newReservation = (e) => {
    e.preventDefault();
    if (date === '') return;
    const newUser = {
      date,
      payload,
      time,
    };
    dispatch(createNewReservations(1, newUser));
    setDate('');
    setTime('');
  };
  return (
    <section className="book-appointment">
      <h2>hello from book appointment</h2>
      <form onSubmit={newReservation}>
        <h4>Book Appointment</h4>
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
        <div className={styles['form-group']}>
          <input
            type="time"
            className="form-control"
            id="date"
            placeholder="time fro appointment"
            onChange={(e) => setDate(e.target.value)}
            value={time}
          />
        </div>

        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default BookAppointment;
