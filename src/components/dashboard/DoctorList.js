import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { singleDoctor } from '../../redux/actions/DoctorActions';
import styles from '../scss/Home.module.scss';

const DoctorList = () => {
  const dispatch = useDispatch();
  const doctordatas = useSelector((state) => state.doctorReducer);
  const { doctors } = doctordatas;
  if (!doctors) {
    return (
      // <h6 className={styles.loading}>Loading ...</h6>
      <h6><ClipLoader /></h6>
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
