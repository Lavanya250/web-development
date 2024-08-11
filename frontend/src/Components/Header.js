import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('roles');
    setIsAuthenticated(!!token); 
    setIsAdmin(role === 'ADMIN'); 
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('roles');
    setIsAuthenticated(false); 
    setIsAdmin(false); 
    navigate('/login', { replace: true });
  };

  const handleCartClick = () => {
    if (isAuthenticated) {
      navigate('/cart');
    } else {
      navigate('/login');
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
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/389afb53848283.Y3JvcCwxNjU4LDEyOTcsMCw0OTk.jpg"
            alt="FreshMART Logo"
            className="logo"
          />
        </Link>
        <p className="logo-name">Fresh</p><p className='logoname'>MART</p>
        <div className="search-bar2">
          <input type="text" placeholder="Search..." />
          <button type="button">
            <i className="fa fa-search"></i>
          </button>
          <div className="basket-icon" onClick={handleCartClick}>
            <i className="fa fa-shopping-basket"></i>
          </div>
        </div>
        {isAuthenticated ? (
          isAdmin ? (
            <div className="admin-button-container">
              <button className="admin-button" onClick={toggleDropdown}>Admin</button>
              {/* <i className={`fa fa-chevron-down ${dropdownOpen ? 'open' : ''}`}></i> */}
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/admin" className="dropdown-item">Admin Dashboard</Link>
                  <span className="dropdown-item" onClick={handleLogout}>Logout</span>
                </div>
              )}
            </div>
          ) : (
            <div className="profile-icon" onClick={toggleDropdown} ref={dropdownRef}>
              <i className="fa fa-user-circle"></i>
              <i className={`fa fa-chevron-down ${dropdownOpen ? 'open' : ''}`}></i>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/account" className="dropdown-item">My Account</Link>
                  <Link to="/cart" className="dropdown-item">My Basket</Link>
                  <span className="dropdown-item" onClick={handleLogout}>Logout</span>
                </div>
              )}
            </div>
          )
        ) : (
          <Link to="/login" className="lgin-button">
            <button type="button">Login/Register</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
