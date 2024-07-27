import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './Adminlogin.css'; // Import the CSS file
import logo from '../assets/logo.jpg'

function Adminlogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Both email and password are required.');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(formData);
      } catch (error) {
        setError('Failed to login. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-wrapper">
      <div className="login-parent-container">
        <div className="login-logo-container">
          <img src={logo} alt="Logo" className="login-logo" />
          <div className="login-logo-text-container">
            <p className="login-logo-text">Online Grocery Shop</p>
          </div>
        </div>
        <div className="login-form-container">
          <h1 className="login-title">Welcome Back!</h1>
          <h1 className="login-title">Admin Login</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-input-container">
              <FaEnvelope className="login-icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="login-input"
              />
            </div>
            <div className="login-input-container">
              <FaLock className="login-icon" />
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="login-input"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="login-toggle-button"
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
            {error && <p className="login-error">{error}</p>}
            <div className="login-button-container">
              <button type="submit" className="login-button" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adminlogin;
