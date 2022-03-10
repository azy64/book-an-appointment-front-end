/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import hitAPIWithSignupDetails from '../../redux/reducer/user';

import styles from '../scss/Login.module.scss';

const Register = () => {
  const navigate = useNavigate();

  function goToHomePage() {
    navigate('/user/dashboard', { replace: true });
  }
  const dispatch = useDispatch();
  const state = useSelector((state) => state.UserReducer);
  const { signedUp } = state;
  const [signUpSuccess, setSignUpSucess] = useState(signedUp);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassowrd] = useState('');
  const registerUser = (e) => {
    e.preventDefault();
    if (email === '' || name === '' || password === '') return;
    const newUser = {
      email,
      name,
      phoneNumber,
      password,
    };
    dispatch(hitAPIWithSignupDetails(newUser));
    setEmail('');
    setName('');
    setPassowrd('');
    setPhoneNumber('');
  };

  useEffect(() => {
    setSignUpSucess(() => signedUp);
    if (signedUp === 'up') {
      setTimeout(() => goToHomePage(), 3000);
    }
  }, [state]);

  return (
    <section className={styles['login-register']}>
      <div className={styles.loginIcon}><FaUser /></div>
      <h2>Welcome</h2>
      <form onSubmit={registerUser}>
        <h4>Enregister</h4>
        <div className={styles['form-group']}>
          {/* <label htmlFor="Email1">Email address</label> */}
          <span className={styles.icon}><HiOutlineMailOpen /></span>
          <input
            type="email"
            className="form-control"
            id="Email1"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles['form-group']}>
          {/* <label htmlFor="name">Full Name</label> */}
          <span className={styles.icon}><FaRegUser /></span>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter full name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className={styles['form-group']}>
          {/* <label htmlFor="name">Full Name</label> */}
          <span className={styles.icon}><FaRegUser /></span>
          <input
            type="tel"
            className="form-control"
            id="name"
            placeholder="mobile Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </div>
        <div className={styles['form-group']}>
          {/* <label htmlFor="password">Password</label> */}
          <span className={styles.icon}><RiLockPasswordLine /></span>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            onChange={(e) => setPassowrd(e.target.value)}
            value={password}
          />
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
};

export default Register;
