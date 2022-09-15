/* eslint-disable no-unused-vars */
import React from 'react';

// // import { IoLogoTwitter } from 'react-icons/io';
// // import { FaLinkedinIn

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { singleDoctor } from '../../redux/actions/DoctorActions';
import styles from '../scss/Home.module.scss';
import icon from '../../images/icon.png';

const DoctorDetail = () => {
  const dispatch = useDispatch();
  const doctordatas = useSelector((state) => state.doctorReducer);
  const { payload } = doctordatas;
  if (!payload) {
    return (
      <div className="ScaleLoader">
        <ScaleLoader color="rgba(161, 161, 161, 0.541)" loading="true" css={{ fontSze: '3.5rem' }} size={150} />
      </div>
    );
  }
  return (
    <section className={styles['doctor-details-section']}>
      <h2>Doctor me</h2>
      <div className={styles['detail-container']}>
        <div className={styles.image}>
          <img src={payload.doctor.picture} alt={payload.doctor.name} />
        </div>
        <div className={styles.details}>
          <h5 className={styles.name}>{payload.doctor.name}</h5>
          <p className={styles.email}>{payload.doctor.email}</p>
          <div className={styles.ulIcon}>
            <ul>
              <li className={styles.first}>
                <p>city: </p>
                <p>{payload.address.city}</p>
              </li>
              <li className={styles.first}>
                <p>state: </p>
                <p>{payload.address.state}</p>
              </li>
              <li className={styles.first}>
                <p>address:</p>
                <p>{payload.address.country}</p>
              </li>
            </ul>
            <div className={styles.iconColor}>
              <img src={icon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
      <Link to="/user/appointments">
        <button type="button" onClick={() => dispatch(singleDoctor(payload.doctor.id))}>Book Appointment</button>
      </Link>
    </section>
  );
};

export default DoctorDetail;
