import React from 'react';
import BackgroundSlider from 'react-background-slider';
import { Link } from 'react-router-dom';
import image1 from '../../images/landing1.jpg';
import image2 from '../../images/landing2.jpg';
import logo from '../../images/logo_transparent.png';
import styles from '../scss/LandingPage.module.scss';

const LandingPage = () => (
  <section className={styles.landingPage}>
    <BackgroundSlider
      images={[image1, image2]}
      duration={10}
      transition={2}
    />
    <div className={styles.landing}>
      <div className={styles.image}>
        <img src={logo} alt="logo" />
      </div>
      <h1>Welcome Back</h1>
      <h3>Login to your account</h3>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <button type="button" className="login">Login</button>
      </Link>
      <div className={styles.sousTitle}>
        <span />
        <h4>MY DOCTOR</h4>
        <span />
      </div>
      <p>
        Don&apos;t have an account?
        {' '}
        <Link to="/register" style={{ textDecoration: 'none' }}>
          Register
        </Link>

      </p>
    </div>
  </section>
);

export default LandingPage;
