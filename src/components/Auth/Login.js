/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <section className="login">
    <h3>Welcome back</h3>
    <form action="">
      <h4>Login</h4>
      <div className="form-group">
        <label htmlFor="Email1">Email address</label>
        <input type="email" className="form-control" id="Email1" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter full name" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="password" />
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
