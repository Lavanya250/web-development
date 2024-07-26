import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for Navbar

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-wrapper">
      <div className="navbar-header fixed-header">
        <Link to="/" className="logo-link">
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/389afb53848283.Y3JvcCwxNjU4LDEyOTcsMCw0OTk.jpg" alt="FreshMART Logo" className="logo" />
        </Link>
        <p className="site-name">Fresh</p><p className='site'>MART</p>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="profile-icon" onClick={toggleDropdown} ref={dropdownRef}>
          <i className="fa fa-user-circle"></i> {/* Changed icon */}
          <i className={`fa fa-chevron-down ${dropdownOpen ? 'open' : ''}`}></i>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/account" className="dropdown-item">My Account</Link>
              <Link to="/myorders" className="dropdown-item">My Orders</Link>
              <Link to="/wallet" className="dropdown-item">My Wallet</Link>
              <Link to="/admin" className="dropdown-item">Admin</Link>
              <Link to="/logout" className="dropdown-item">Logout</Link>
            </div>
          )}
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
