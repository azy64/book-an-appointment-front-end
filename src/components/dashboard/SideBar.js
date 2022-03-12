import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CgMenu, CgClose } from 'react-icons/cg';
import { IoLogoTwitter } from 'react-icons/io';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { FaLinkedinIn, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { hitAPIWithLogoutDetails } from '../../redux/reducer/user';
import logo from '../../images/logo_transparent.png';
import styles from '../scss/SideBar.module.scss';

const SideBar = () => {
  const dispatch = useDispatch();
  const [navbarShrink, setNavbarShrink] = useState(false);
  const authuser = window.localStorage.getItem('userAuth');
  const handleToggle = () => {
    setNavbarShrink(!navbarShrink);
  };
  return (
    <header>
      <button type="button" onClick={handleToggle}>
        {navbarShrink ? <CgClose /> : <CgMenu className={styles['show-btn']} />}
      </button>
      <nav className={styles[`${navbarShrink ? 'sidebar-dashboard' : 'shrink-navbar'}`]}>
        <div className={styles.image}>
          <img src={logo} alt="logo" />
        </div>
        <ul className={styles['list-links']}>
          <li className={styles['nav-link']}>
            <NavLink to="/user/Dashboard" className={styles.activeLink}>
              Home
            </NavLink>
          </li>
          <li className={styles['nav-link']}>
            <NavLink to="/user/doctors" className={styles.activeLink}>
              Available Doctors
            </NavLink>
          </li>
          <li className={styles['nav-link']}>
            <NavLink to="/user/reservation" className={styles.activeLink}>
              My Reservations
            </NavLink>
          </li>
          <li className={styles['nav-link']}>
            <NavLink to="/user/appointments" className={styles.activeLink}>
              Book Appointment
            </NavLink>
          </li>
          <li className={styles['nav-link']}>
            <NavLink to="/" className={styles.activeLink} onClick={() => dispatch(hitAPIWithLogoutDetails(authuser))}>
              Sign Out
            </NavLink>
          </li>
        </ul>
        <div className={styles.footer}>
          <ul className={styles['social-icons']}>
            <li className={styles['social-link']}><IoLogoTwitter /></li>
            <li className={styles['social-link']}><FaLinkedinIn /></li>
            <li className={styles['social-link']}><TiSocialGooglePlus /></li>
            <li className={styles['social-link']}><FaFacebookF /></li>
            <li className={styles['social-link']}><FaPinterestP /></li>
          </ul>
          <p>&copy; 2022 BOOK AN APPOINTMENT</p>
        </div>
      </nav>

    </header>

  );
};

export default SideBar;
