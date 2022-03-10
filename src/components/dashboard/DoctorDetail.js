/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { singleDoctor } from '../../redux/actions/DoctorActions';

const DoctorDetail = () => {
  const dispatch = useDispatch();
  const doctordatas = useSelector((state) => state.doctorReducer);
  const { payload } = doctordatas;
  console.log(payload, 'doctor tinz');
  if (!payload) {
    return (
      <h2>Loading</h2>
    );
  }
  return (
    <section className="doctor-detail">
      <h2>Doctor me</h2>
      <div>
        <img src={payload.doctor.picture} style={{ width: '70', height: '70' }} alt={payload.doctor.name} />
        <h4>{payload.doctor.name}</h4>
        <h4>{payload.doctor.email}</h4>
        <h3>
          city:
          {' '}
          {payload.address.city}
        </h3>
        <h3>
          state:
          {' '}
          {payload.address.state}
        </h3>
        <h4>
          address:
          {' '}
          {payload.address.country}
        </h4>
      </div>
      <Link to="/user/appointments">
        <button type="button" onClick={() => dispatch(singleDoctor(payload.doctor.id))}>Book Appointment</button>
      </Link>
    </section>
  );
};

export default DoctorDetail;
