import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => (
  <section className="sidebar-dashboard">
    <div className="sidebar-inner">
      <div className="nav-links">
        <Link to="/user/Dashboard" style={{ textDecoration: 'none' }}>
          Home
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/user/doctors" style={{ textDecoration: 'none' }}>
          Available Doctors
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/user/reservation" style={{ textDecoration: 'none' }}>
          My Reservations
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/user/appointments" style={{ textDecoration: 'none' }}>
          Book Appointment
        </Link>
      </div>
    </div>
  </section>
);

export default SideBar;
