import React from 'react';
import { Link } from 'react-router-dom';

// import { IoLogoTwitter } from 'react-icons/io';
// import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { singleDoctor } from '../../redux/actions/DoctorActions';
import styles from '../scss/Home.module.scss';
// import { doctordata } from '../../mockdata';

// const DoctorList = () => (
//   <section className={styles['doctors-section']}>
//      <ul className={styles['doctor-lists']}>
//       {
//         doctordata.map((item) => (
//           <li className={styles.list} key={item.id}>
//             <button type="button">
//               Appointment
//             </button>
//             {/* <ul className={styles['icon-links']}>
//               <li className={styles.link}><FaFacebookF /></li>
//               <li className={styles.link}><IoLogoTwitter /></li>
//               <li className={styles.link}><FaLinkedinIn /></li>
//             </ul> */}
//           </li>
//         ))
//       }
//     </ul>
//   </section>
// );
const DoctorList = () => {
  const dispatch = useDispatch();
  const doctordatas = useSelector((state) => state.doctorReducer);
  const { doctors } = doctordatas;
  if (!doctors) {
    return (
      <h2>Loading</h2>
    );
  }
  return (
    <section className={styles['doctor-list-section']}>
      <h2>List of Doctors</h2>
      <dv className={styles.points}>.........................</dv>
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
