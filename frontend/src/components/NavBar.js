// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile/1">Profile</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/donations">Donations</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
        {isLoggedIn ? (
          <li><Link to="/logout" onClick={() => { localStorage.removeItem('token'); window.location.href = '/'; }}>Logout</Link></li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
