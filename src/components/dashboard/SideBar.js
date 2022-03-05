import React from 'react';
// import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { CgMenu, CgClose } from 'react-icons/cg';
import { IoLogoTwitter } from 'react-icons/io';
import { FaLinkedinIn, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import logo from '../../images/logo_transparent.png';
import styles from '../scss/SideBar.module.scss';
// const [navbarOpen, setNavbarOpen] = useState(false);

// const handleToggle = () => {
//   setNavbarOpen((prev) => !prev);
// };

const SideBar = () => (
  <nav className={styles['sidebar-dashboard']}>
    {/* <button type="button" onClick={handleToggle}>{navbarOpen ? 'Close' : 'Open'}</button> */}
    <div className={styles.menuIcons}>
      <div><CgMenu /></div>
      <div><CgClose /></div>
    </div>
    <div className={styles.image}>
      <img src={logo} alt="logo" />
    </div>
    <ul className={styles['sidebar-inner']}>
      <li className={styles['nav-links']}>
        <NavLink to="/user/Dashboard" activeClassName={styles.activeLink} exact>
          Home
        </NavLink>
      </li>
      <li className={styles['nav-links']}>
        <NavLink to="/user/doctors" activeClassName={styles.activeLink} exact>
          Available Doctors
        </NavLink>
      </li>
      <li className={styles['nav-links']}>
        <NavLink to="/user/reservation" activeClassName={styles.activeLink} exact>
          My Reservations
        </NavLink>
      </li>
      <li className={styles['nav-links']}>
        <NavLink to="/user/appointments" activeClassName={styles.activeLink} exact>
          Book Appointment
        </NavLink>
      </li>
    </ul>
    <ul className={styles['social-icons']}>
      <li className={styles['social-link']}><IoLogoTwitter /></li>
      <li className={styles['social-link']}><FaLinkedinIn /></li>
      <li className={styles['social-link']}><FaFacebookF /></li>
      <li className={styles['social-link']}><FaPinterestP /></li>
    </ul>
  </nav>
);

export default SideBar;
