import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { singleDoctor } from '../../redux/actions/DoctorActions';
import styles from '../scss/Home.module.scss';

const DoctorList = () => {
  const dispatch = useDispatch();
  const doctordatas = useSelector((state) => state.doctorReducer);
  const { doctors } = doctordatas;
  if (!doctors) {
    return (
      <div className="ScaleLoader">
        <ScaleLoader color="rgba(161, 161, 161, 0.541)" loading="true" css={{ fontSze: '3.5rem' }} size={150} />
      </div>
    );
  }
  return (
    <section className={styles['doctor-list-section']}>
      <h2>List of Doctors</h2>
      <div className={styles.points}>.........................</div>
      <ul className={styles['all-doctor-lists']}>
        {
        doctors.map((item) => {
          const {
            name, picture, email, id,
          } = item.doctor;
          return (
            <li className="list-items" key={id}>
              <div className={styles['doctors-imgs']}>
                <img src={picture} style={{ width: '70', height: '70' }} alt={item.name} />
              </div>
              <h5 className={styles.name}>{name}</h5>
              <p className={styles.email}>{email}</p>
              <Link to={`${id}`}>
                <button type="button" onClick={() => dispatch(singleDoctor(id))}>View Doctor</button>
              </Link>
            </li>
          );
        })
      }
      </ul>
    </section>
  );
};

export default DoctorList;
