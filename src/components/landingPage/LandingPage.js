import React from 'react';
import BackgroundSlider from 'react-background-slider';
import { Link } from 'react-router-dom';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';

const LandingPage = () => (
  <section className="landing">
    <BackgroundSlider
      images={[image1, image2]}
      duration={10}
      transition={2}
    />
    <div className="center">
      <h1> hello landing</h1>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <button type="button" className="login">Login</button>
      </Link>
    </div>
  </section>
);

export default LandingPage;
