/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSelector } from 'react-redux';

const DoctorDetail = () => {
  const doctordatas = useSelector((state) => state.doctorReducer);
  const { payload } = doctordatas;
  console.log(payload, doctordatas, 'doctor tinz');
  if (!payload) {
    return (
      <h2>Loading</h2>
    );
  }
  return (
    <section className="doctor-detail">
      <h2>Doctor me</h2>
      <div>
        <img src={payload.doctor.picture} style={{ width: '70', height: '70' }} />
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
    </section>
  );
};

export default DoctorDetail;
