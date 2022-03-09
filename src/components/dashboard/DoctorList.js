/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

// import { IoLogoTwitter } from 'react-icons/io';
// import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import styles from '../scss/Doctor.module.scss';
import { doctordata } from '../../mockdata';

const DoctorList = () => (
  <section className={styles['doctors-section']}>
    <h2 className={styles.title}>List of Doctors</h2>
    <h4 className={styles['sous-title']}>Please select a Doctor</h4>
    <dv className={styles.points}>.........................</dv>
    <ul className={styles['doctor-lists']}>
      {
        doctordata.map((item) => (
          <li className={styles.list} key={item.id}>
            <Link to={`${item.id}`}>
              <div className={styles['doctor-img']}>
                <img src={item.image} />
              </div>
              <h5 className={styles.name}>
                {item.firstName}
                {item.lastName}
              </h5>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.points}>.........................</div>
            </Link>
            <button type="button">
              Appointment
            </button>
            {/* <ul className={styles['icon-links']}>
              <li className={styles.link}><FaFacebookF /></li>
              <li className={styles.link}><IoLogoTwitter /></li>
              <li className={styles.link}><FaLinkedinIn /></li>
            </ul> */}
          </li>
        ))
      }
    </ul>
  </section>
);

export default DoctorList;
