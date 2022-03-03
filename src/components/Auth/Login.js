/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';

import styles from '../scss/Login.module.scss';

const Login = () => (
  <section className={styles['login-section']}>
    <div className={styles.loginIcon}><FaUser /></div>
    <h2>Welcome back</h2>

    <form action="">
      <h4>Member Login</h4>
      <div className={styles['form-group']}>
        {/* <label htmlFor="Email1">Email address</label> */}
        <span className={styles.icon}><HiOutlineMailOpen /></span>
        <input type="email" className="form-control" id="Email1" placeholder="Useremail" />
      </div>

      <div className={styles['form-group']}>
        {/* <label htmlFor="name">Full Name</label> */}
        <span className={styles.icon}><FaRegUser /></span>
        <input type="text" className="form-control" id="name" placeholder="Username" />
      </div>

      <div className={styles['form-group']}>
        {/* <label htmlFor="password">Password</label> */}
        <span className={styles.icon}><RiLockPasswordLine /></span>
        <input type="password" className="form-control" id="password" placeholder="Password" />
      </div>

      <button type="submit">Submit</button>
    </form>
    <p>
      New here?
      {' '}
      <Link to="/register" style={{ textDecoration: 'none' }}>
        Register
      </Link>

    </p>
  </section>
);

export default Login;
