import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { singleDoctor } from '../../redux/actions/DoctorActions';
import styles from '../scss/Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  const doctordatas = useSelector((state) => state.doctorReducer);
  const { doctors } = doctordatas;
  if (!doctors) {
    return (
      <h2>Loading</h2>
    );
  }
  return (
    <section className={styles['doctor-list']}>
      <h2>Hello Welcome to your Dashboard</h2>
      <h2>List of your favourite Doctors</h2>
      <div className="list">
        {
        doctors.slice(0, 5).map((item) => {
          const {
            name, picture, email, id,
          } = item.doctor;
          return (
            <div className="list-items" key={id}>
              <img src={picture} style={{ width: '70', height: '70' }} alt={item.name} />
              <h3>{name}</h3>
              <h4>{email}</h4>
              <Link to={`/user/doctors/${id}`} onClick={() => dispatch(singleDoctor(id))}>
                <button type="button">View Doctor</button>
              </Link>
            </div>
          );
        })
      }
      </div>
    </section>
  );
};

export default Home;
