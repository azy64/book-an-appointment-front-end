import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewReservations } from '../../redux/actions/ResevationActions';
import styles from '../scss/Login.module.scss';

const BookAppointment = () => {
  const dispatch = useDispatch();
  const doctordatas = useSelector((state) => state.doctorReducer);
  const { payload } = doctordatas;
  const docid = payload?.doctor.id;
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const newReservation = (e) => {
    e.preventDefault();
    if (date === '') return;
    const newUser = {
      date,
      docid,
      time,
    };
    dispatch(createNewReservations(1, newUser));
    setDate('');
    setTime('');
  };
  return (
    <section className="book-appointment">
      <h2>hello from book appointment</h2>
      { payload ? (
        <div>
          <h3>
            Doctor name:
            {payload.doctor.name}
          </h3>
          <h3>
            Doctor address:
            {payload.address.address}
            ,
            {payload.address.city}
            ,
            {payload.address.state}
            ,
            {payload.address.country}
          </h3>
          <h3>
            Doctor email:
            {payload.doctor.email}
          </h3>
        </div>
      )
        : <h1>Kindly Go back to doctors list to select your favourite doctor</h1>}
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
