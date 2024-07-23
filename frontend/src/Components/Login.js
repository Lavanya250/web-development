import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Login component
function Login() {
  // State for form data and error message
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Both email and password are required.');
    } else {
      setError('');
      console.log(formData);
    }
  };

  // Render the Login component
  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>Login</button>
          <p>Don't have an account? <Link to="/register" style={styles.link}>Register</Link></p>
        </div>
      </form>
    </div>
  );
}

// Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px'
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    marginBottom: '10px'
  },
  link: {
    fontSize: '16px',
    color: '#007BFF',
    textDecoration: 'none'
  },
  error: {
    color: 'red',
    margin: '10px 0'
  }
};

export default Login;
