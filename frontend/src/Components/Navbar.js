// src/Components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for Navbar

function Navbar() {
  return (
    <div className='nav-top'>
    <nav className="navbar1">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/categories">Categories</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="navbar-login">
        <Link to="/categories" className="navbar-login-link">Offers</Link>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
