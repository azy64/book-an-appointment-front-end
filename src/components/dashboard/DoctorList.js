/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { doctordata } from '../../mockdata';
import styles from '../scss/Doctor.module.scss';

const DoctorList = () => (
  <section className={styles['doctor-list']}>
    <h2>List of Doctors</h2>
    <div className="list">
      {
        doctordata.map((item) => (
          <div className="list-items" key={item.id}>
            <Link to={`${item.id}`}>
              <img src={item.image} style={{ width: '70', height: '70' }} />
              <h3>{item.firstName}</h3>
              <h4>{item.lastName}</h4>
            </Link>
          </div>
        ))
      }
    </div>
  </section>
);

export default DoctorList;
