import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { CgMenu, CgClose } from 'react-icons/cg';
import styles from '../scss/SideBar.module.scss';
import logo from '../../images/logo_transparent.png';

const SideBar = () => (
  <nav className={styles['sidebar-dashboard']}>
    <div>
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
    <div className="social-icons">
      <span><i className="fab fa-twitter fa-2x" /></span>
      <span><i className="fab fa-facebook fa-2x" /></span>
      <span><i className="fab fa-instagram fa-2x" /></span>
      <span><i className="fab fa-github fa-2x" /></span>
    </div>
  </nav>
);

export default SideBar;
