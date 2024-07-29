import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for Header

function Header() {
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
    <div className="header-wrapper">
      <div className="header-content fixed-header">
        <Link to="/" className="logo1-link">
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/389afb53848283.Y3JvcCwxNjU4LDEyOTcsMCw0OTk.jpg" alt="FreshMART Logo" className="logo" />
        </Link>
        <p className="logo-name">Fresh</p><p className='logoname'>MART</p>
        <div className="search-bar2">
          <input type="text" placeholder="Search..." />
          <button type="button">
            <i className="fa fa-search"></i>
          </button>
          <Link to="/myorders" className="basket-icon">
            <i className="fa fa-shopping-basket"></i>
          </Link>
        </div>
        <div className="profile-icon" onClick={toggleDropdown} ref={dropdownRef}>
          <i className="fa fa-user-circle"></i>
          <i className={`fa fa-chevron-down ${dropdownOpen ? 'open' : ''}`}></i>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/account" className="dropdown-item">My Account</Link>
              <Link to="/myorders" className="dropdown-item">My Basket</Link>
              <Link to="/adminlogin" className="dropdown-item">Store Manage</Link>
              <Link to="/logout" className="dropdown-item">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
