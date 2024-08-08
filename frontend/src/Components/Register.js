import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaPhone } from 'react-icons/fa'; // Importing icons from react-icons library
import './Register.css'; // Import the CSS file
import Navbar from './Navbar';
import axios from 'axios';

import Header from './Header';

function Register() {
  // State for form data, error message, and loading state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });
  const apiurl = "http://127.0.0.1:8080/api/users";
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword || !formData.phoneNumber) {
      setError('All fields are required.');
    } else if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      setLoading(true);
      try {
        const response = await axios.post(apiurl, {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          mobileNumber: formData.phoneNumber,
          roles: "USER",
        });
        if (response.status === 201) {
          alert("User created successfully");
          navigate('/login');
        } else {
          alert("User creation failed");
        }
      } catch (error) {
        console.error(error);
        setError("Network error. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Render the Register component
  return (
    <div className='registerback'>
      <Header/>
      <Navbar/>
      <div className="register-wrapper">
        <div className="register-container">
          <h1 className="register-title">Create an Account</h1>
          <form onSubmit={handleSubmit} className="register-form">
            <div className="register-input-container">
              <FaUser className="register-icon" />
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="register-input"
              />
            </div>
            <div className="register-input-container">
              <FaUser className="register-icon" />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="register-input"
              />
            </div>
            <div className="register-input-container">
              <FaEnvelope className="register-icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="register-input"
              />
            </div>
            <div className="register-input-container">
              <FaLock className="register-icon" />
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="register-input"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="register-toggle-button"
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
            <div className="register-input-container">
              <FaLock className="register-icon" />
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="register-input"
              />
            </div>
            <div className="register-input-container">
              <FaPhone className="register-icon" />
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="register-input"
              />
            </div>
            {error && <p className="register-error">{error}</p>}
            <div className="registerbuttoncontainer">
              <button type="submit1" className="registerbutton" disabled={loading}>
                {loading ? 'Registering...' : 'Register'}
              </button>
              <p>Already have an account? <Link to="/login" className="register-link">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
