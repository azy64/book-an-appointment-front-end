/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { hitAPIWithSigninDetails } from '../../redux/reducer/user';

import styles from '../scss/Login.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.UserReducer);
  const { loggedIn } = state;
  const [signedInSuccess, setSignedInSuccess] = useState(loggedIn);
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const loginUser = (e) => {
    e.preventDefault();
    if (email === '' || password === '') return;
    const newUser = {
      email,
      password,
    };
    dispatch(hitAPIWithSigninDetails(newUser));
    setEmail('');
    setPassowrd('');
  };

  useEffect(() => {
    if (loggedIn === 'in') {
      navigate('/user/dashboard', { replace: true });
    }
    if (loggedIn === 'err') {
      setSignedInSuccess(loggedIn);
    }
  }, [state]);
  return (
    <section className={styles['login-section']}>
      <div className={styles.loginIcon}><FaUser /></div>
      <h2>Welcome back</h2>

      <form onSubmit={loginUser}>
        <h4>Member Login</h4>
        <div className={styles['form-group']}>
          <span className={styles.icon}><HiOutlineMailOpen /></span>
          <input
            type="email"
            className="form-control"
            id="Email1"
            placeholder="Useremail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles['form-group']}>
          <span className={styles.icon}><RiLockPasswordLine /></span>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassowrd(e.target.value)}
            value={password}
          />
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
};

export default Login;
