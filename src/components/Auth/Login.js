/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { loginNewUser } from '../../redux/actions/UserActions';

import styles from '../scss/Login.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassowrd] = useState('');
  const loginUser = (e) => {
    e.preventDefault();
    if (email === '' || name === '' || password === '') return;
    const newUser = {
      email,
      name,
      password,
    };
    dispatch(loginNewUser(newUser));
    setEmail('');
    setName('');
    setPassowrd('');
  };
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

        {/* <div className={styles['form-group']}>
          <span className={styles.icon}><FaRegUser /></span>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div> */}

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
