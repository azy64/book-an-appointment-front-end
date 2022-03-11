import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewReservations } from '../../redux/actions/ResevationActions';
import styles from '../scss/Appointment.module.scss';

const BookAppointment = () => {
  const dispatch = useDispatch();
  const doctordatas = useSelector((state) => state.doctorReducer);
  const { userId } = JSON.parse(window.localStorage.getItem('bookDoctorUser'));
  const userID = userId || 1;
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
    dispatch(createNewReservations(userID, newUser));
    setDate('');
    setTime('');
  };
  return (
    <section className={styles['book-appointment-section']}>
      <h2 className={styles.title}>Doctor book appointment</h2>
      { payload ? (
        <ul>
          <li className={styles.second}>
            <p>Doctor name: </p>
            <p>{payload.doctor.name}</p>
          </li>
          <li className={styles.second}>
            <p>Doctor address: </p>
            <p>
              {payload.address.address}
              ,
              {payload.address.city}
              ,
              {payload.address.state}
              ,
              {payload.address.country}
            </p>
          </li>
          <li className={styles.second}>
            <p>Doctor email:</p>
            <p>{payload.doctor.email}</p>
          </li>
        </ul>
      )
        : <h4>Kindly Go back to doctors list to select your favourite doctor</h4>}
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
          <input
            type="time"
            className="form-control"
            id="date"
            placeholder="time fro appointment"
            onChange={(e) => setTime(e.target.value)}
            value={time}
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
