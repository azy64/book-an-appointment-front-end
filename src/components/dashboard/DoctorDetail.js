/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSelector } from 'react-redux';

const DoctorDetail = () => {
  const doctordatas = useSelector((state) => state.doctorReducer);
  const { doctor } = doctordatas;
  console.log(doctor, doctordatas, 'doctor tinz');
  if (!doctor) {
    return (
      <h2>Loading</h2>
    );
  }
  return (
    <section className="doctor-detail">
      <h2>Doctor me</h2>
      <div>
        <img src={doctor.picture} style={{ width: '70', height: '70' }} />
        <h3>{doctor.name}</h3>
        <h3>{doctor.email}</h3>
      </div>
    </section>
  );
};

export default DoctorDetail;
