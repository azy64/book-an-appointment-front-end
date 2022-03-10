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
        doctors.slice(0, 5).map((item) => (
          <div className="list-items" key={item.id}>
            <img src={item.image} style={{ width: '70', height: '70' }} alt={item.name} />
            <h3>{item.firstName}</h3>
            <h4>{item.lastName}</h4>
            <Link to={`${item.id}`} onClick={() => dispatch(singleDoctor(item.id))}>
              <button type="button">Book Now</button>
            </Link>
          </div>
        ))
      }
      </div>
    </section>
  );
};

export default Home;
