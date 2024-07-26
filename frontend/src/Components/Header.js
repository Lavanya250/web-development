import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for Header

function Header() {
  return (
    <div className="header-wrapper">
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
  );
}

export default Header;
