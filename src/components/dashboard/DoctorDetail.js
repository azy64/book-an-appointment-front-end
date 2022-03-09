/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSelector } from 'react-redux';

const DoctorDetail = () => {
  const doctordatas = useSelector((state) => state.doctorReducer);
  const { doctor } = doctordatas;
  if (!doctor) {
    return (
      <h2>Loading</h2>
    );
  }
  return (
    <section className="doctor-detail">
      <h2>Doctor me</h2>
      <div>
        <img src={doctor.image} style={{ width: '70', height: '70' }} />
        <h3>{doctor.firstName}</h3>
        <h3>{doctor.lastName}</h3>
      </div>
    </section>
  );
};

export default DoctorDetail;
