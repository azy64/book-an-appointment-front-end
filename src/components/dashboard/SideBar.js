import React from 'react';
// import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// import { CgMenu, CgClose } from 'react-icons/cg';
import styles from '../scss/SideBar.module.scss';
import logo from '../../images/logo_transparent.png';

// const [navbarOpen, setNavbarOpen] = useState(false);

// const handleToggle = () => {
//   setNavbarOpen((prev) => !prev);
// };

// const handleToggle = () => {
//   setNavbarOpen(!navbarOpen);
// };

const SideBar = () => (
  <nav className={styles['sidebar-dashboard']}>
    {/* <button type="button" onClick={handleToggle}>{navbarOpen ? 'Close' : 'Open'}</button> */}
    <div className={styles.menuIcons}>
      {/* <div><CgMenu /></div>
    <div><CgClose /></div> */}
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
      <span>
        <i className="fab fa-twitter fa-2x" />
        werwrerteryreyryrtyrt
      </span>
      <span><i className="fab fa-facebook fa-2x" /></span>
      <span><i className="fab fa-instagram fa-2x" /></span>
      <span><i className="fab fa-github fa-2x" /></span>
    </div>
  </nav>
);

export default SideBar;
