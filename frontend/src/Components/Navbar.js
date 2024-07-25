import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for Navbar

// You can import the logo image if it's a local file
// import logo from './logo.png'; 

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-header">
        <Link to="/" className="logo-link">
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/389afb53848283.Y3JvcCwxNjU4LDEyOTcsMCw0OTk.jpg" alt="FreshMART Logo" className="logo" />
        </Link>
        <p className="site-name">FreshMART</p>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <nav className="navbar">
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
          <Link to="/login" className="navbar-login-link">Login</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
