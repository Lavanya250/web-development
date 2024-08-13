import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Account.css';
import Header from './Header';

const Account = () => {
  const [selectedSection, setSelectedSection] = useState('Personal Details');
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    email: '',
    mobileNumber: '',
  });
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Get token from local or session storage
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');

        if (token) {
          // Decode the token to extract email (assuming JWT format)
          const email = JSON.parse(atob(token.split('.')[1])).sub;

          // Fetch user details
          const response = await axios.get(`http://127.0.0.1:8080/api/users/email/${email}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // Update state with fetched user details
          setUserDetails({
            firstName: response.data.firstName,
            email: response.data.email,
            mobileNumber: response.data.mobileNumber,
          });
        } else {
          console.warn('Token not found in localStorage or sessionStorage.');
          navigate('/login'); // Redirect to login if token is missing
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        navigate('/login'); // Redirect to login in case of error
      }
    };

    fetchUserDetails();
  }, [navigate]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Get token from local or session storage
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');

        if (token && userDetails.email) {
          // Fetch orders based on the user's email
          const response = await axios.get(`http://127.0.0.1:8080/api/orders/email/all/${userDetails.email}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // Update state with fetched orders
          setOrders(response.data);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    if (userDetails.email) {
      fetchOrders();
    }
  }, [userDetails.email]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="account-page">
      <Header />
      <div className="main-content2">
        <aside className="sidebar1">
          <ul>
            <li onClick={() => handleSectionClick('Personal Details')}>Personal Details</li>
            <li onClick={() => handleSectionClick('My Orders')}>My Orders</li>
            <li onClick={() => handleSectionClick('My Payment')}>My Payment</li>
            <li onClick={() => handleSectionClick('Past Orders')}>Past Orders</li>
          </ul>
        </aside>
        <div className="content1">
          {selectedSection === 'Personal Details' && (
            <div className="personal-details">
              <h1>Personal Details</h1>
              <div className="details-container">
                <div className="detail-item">
                  <span>Name: {userDetails.firstName || 'Loading...'}</span>
                  <button className="edit-button">Edit</button>
                </div>
                <div className="detail-item">
                  <span>Email: {userDetails.email || 'Loading...'}</span>
                </div>
                <div className="detail-item">
                  <span>Mobile Number: {userDetails.mobileNumber || 'Loading...'}</span>
                </div>
              </div>
            </div>
          )}

          {selectedSection === 'My Orders' && (
            <div className="my-orders">
              <h1>My Orders</h1>
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Order Email</th>
                    <th>Time Slot</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length > 0 ? (
                    orders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.productName}</td>
                        <td>{order.price}</td>
                        <td>{order.quantity}</td>
                        <td>{order.orderEmail}</td> {/* Updated field name */}
                        <td>{order.timeSlot}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7">No orders found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Other sections remain the same */}
        </div>
      </div>
    </div>
  );
};

export default Account;
