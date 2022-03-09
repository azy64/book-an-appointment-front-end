import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { CgMenu, CgClose } from 'react-icons/cg';
import { IoLogoTwitter } from 'react-icons/io';
import { FaLinkedinIn, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import logo from '../../images/logo_transparent.png';
import styles from '../scss/SideBar.module.scss';

const SideBar = () => {
  const [navbarShrink, setNavbarShrink] = useState(false);
  const handleToggle = () => {
    setNavbarShrink(!navbarShrink);
  };
  return (
    <nav className={styles[`${navbarShrink ? 'shrink-navbar sidebar-dashboard' : 'sidebar-dashboard'}`]}>
      <button type="button" onClick={handleToggle}>
        {navbarShrink ? <CgMenu />
          : <CgClose />}
      </button>
      <div className={styles.image}>
        <img src={logo} alt="logo" />
      </div>
      <ul className={styles['sidebar-inner']}>
        <li className={styles['nav-links']}>
          <NavLink to="/user/Dashboard" className={styles.activeLink}>
            Home
          </NavLink>
        </li>
        <li className={styles['nav-links']}>
          <NavLink to="/user/doctors" className={styles.activeLink}>
            Available Doctors
          </NavLink>
        </li>
        <li className={styles['nav-links']}>
          <NavLink to="/user/reservation" className={styles.activeLink}>
            My Reservations
          </NavLink>
        </li>
        <li className={styles['nav-links']}>
          <NavLink to="/user/appointments" className={styles.activeLink}>
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
};

export default SideBar;
