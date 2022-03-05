/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';

import styles from '../scss/Login.module.scss';

const Register = () => (
  <section className={styles['login-register']}>
    <div className={styles.loginIcon}><FaUser /></div>
    <h2>Welcome</h2>
    <form action="">
      <h4>Enregister</h4>
      <div className={styles['form-group']}>
        {/* <label htmlFor="Email1">Email address</label> */}
        <span className={styles.icon}><HiOutlineMailOpen /></span>
        <input type="email" className="form-control" id="Email1" placeholder="Enter email" />
      </div>
      <div className={styles['form-group']}>
        {/* <label htmlFor="name">Full Name</label> */}
        <span className={styles.icon}><FaRegUser /></span>
        <input type="text" className="form-control" id="name" placeholder="Enter full name" />
      </div>
      <div className={styles['form-group']}>
        {/* <label htmlFor="password">Password</label> */}
        <span className={styles.icon}><RiLockPasswordLine /></span>
        <input type="password" className="form-control" id="password" placeholder="password" />
      </div>
      <button type="submit">Register</button>
    </form>
    <p>
      Already have an account?
      {' '}
      <Link to="/login" style={{ textDecoration: 'none' }}>
        Login
      </Link>

    </p>
  </section>
);

export default Register;
