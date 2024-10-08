import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Importing icons from react-icons library
import './Login.css'; // Import the CSS file
import Navbar from './Navbar';
import Header from './Header';
import axios from 'axios';

function Login() {
  // State for form data, error message, and loading state
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
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
    if (!formData.email || !formData.password) {
      setError('Both email and password are required.');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      setLoading(true);
      try {
        const response = await axios.post(
          "http://127.0.0.1:8080/api/auth/authenticate",
          formData
        );
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("roles", response.data.role);
        const role = localStorage.getItem("roles");
        if (role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } catch (error) {
        setError('Failed to login. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Render the Login component
  return (
    <div className='loginback'>
      <Header />
      <Navbar />
      <div className="login-wrapper">
        <div className="login-container">
          <h1 className="login-title">Welcome Back!</h1>
          <h1 className="login-title">Login to your account</h1>
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
            <div className="login-button-contain">
              <button type="submit1" className="login-button" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
              <Link to="/forgot-password" className="login-forgot-password">Forgot Password?</Link>
              <p>Don't have an account? <Link to="/register" className="login-link">Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
