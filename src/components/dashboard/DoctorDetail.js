/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import { doctordatadetail } from '../../mockdata';
// // import { IoLogoTwitter } from 'react-icons/io';
// // import { FaLinkedinIn
import { useSelector } from 'react-redux';
import styles from '../scss/Home.module.scss';
import icon from '../../images/icon.png';

// const DoctorDetail = () => (
//   <section className={styles['doctor-details-section']}>
//     <h2>Doctor me</h2>
//     <div className={styles['detail-container']}>
//       <div className={styles.image}>
//         <img src={doctordatadetail.image} />
//       </div>
//       <div className={styles.details}>
//         <h5 className={styles.name}>
//           {doctordatadetail.firstName}
//           {' '}
//           {doctordatadetail.lastName}
//         </h5>
//         <div className={styles.ulIcon}>
//           <ul>
//             <li className={styles.first}>
//               <p>Finance fee</p>
//               <p>$129</p>
//             </li>
//             <li className={styles.first}>
//               <p>Option to purchase fee</p>
//               <p>$249</p>
//             </li>
//             <li className={styles.first}>
//               <p>Total ammount payable</p>
//               <p>$9,879</p>
//             </li>
//             <li className={styles.first}>
//               <p>Duration</p>
//               <p>48 Months</p>
//             </li>
//           </ul>
//           <div className={styles.iconColor}>
//             <img src={icon} alt="icon" />
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

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
    <section className={styles['doctor-details-section']}>
      <h2>Doctor me</h2>
      <div className={styles['detail-container']}>
        <div className={styles.image}>
          <img src={payload.doctor.picture} style={{ width: '70', height: '70' }} />
        </div>
        <div className={styles.details}>
          <h5 className={styles.name}>{payload.doctor.name}</h5>
          <p className={styles.email}>{payload.doctor.email}</p>
          <div className={styles.ulIcon}>
            <ul>
              <li className={styles.first}>
                <p>city: </p>
                <p>{payload.address.city}</p>
              </li>
              <li className={styles.first}>
                <p>state: </p>
                <p>{payload.address.state}</p>
              </li>
              <li className={styles.first}>
                <p>address:</p>
                <p>{payload.address.country}</p>
              </li>
            </ul>
            <div className={styles.iconColor}>
              <img src={icon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetail;
