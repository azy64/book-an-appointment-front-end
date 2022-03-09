/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { doctordatadetail } from '../../mockdata';

const DoctorDetail = () => (
  <section className="doctor-detail">
    <h2>Doctor me</h2>
    <div>
      <img src={doctordatadetail.image} style={{ width: '70', height: '70' }} />
      <h3>{doctordatadetail.firstName}</h3>
      <h3>{doctordatadetail.lastName}</h3>
    </div>
  </section>
);

export default DoctorDetail;
