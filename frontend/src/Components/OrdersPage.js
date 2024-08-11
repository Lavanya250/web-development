import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './OrdersPage.css';

const OrdersPage = () => {
  const { state } = useLocation();
  const { order } = state || {};
  const navigate = useNavigate();

  // State to manage form data including product details
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    roomNumber: '',
    street: '',
    city: '',
    state: '',
    timeSlot: '',
    productName: '',
    price: '',
    quantity: '',
    total: '',
  });

  useEffect(() => {
    if (order) {
      // Populate the form with order details if available
      setFormData((prevData) => ({
        ...prevData,
        productName: order.name,
        price: order.price,
        quantity: order.quantity,
        total: (order.price * order.quantity).toFixed(2),
      }));
    }
  }, [order]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to save order and delivery info
      const response = await axios.post('http://127.0.0.1:8080/api/orders', {
        ...formData,
      });

      if (response.status === 201) {
        alert('Order and delivery information saved successfully!');
        // Navigate to the payment page
        navigate('/paymentpage', { state: { order, deliveryInfo: formData } });
      } else {
        alert('Failed to save order. Please try again.');
        console.error('Response Status:', response.status);
        console.error('Response Data:', response.data);
      }
    } catch (error) {
      console.error('Error sending order:', error.response || error);
      alert('Failed to save order. Please try again.');
    }
  };

  return (
    <div className="buy-details-page">
      <h1>Order Details</h1>
      {order ? (
        <div className="order-summary">
          <h2>Product Name: {order.name}</h2>
          <p>Price: ${order.price}</p>
          <p>Quantity: {order.quantity}</p>
          <p>Total: ${(order.price * order.quantity).toFixed(2)}</p>
          <form className="delivery-form" onSubmit={handleSubmit}>
            <h3>Delivery Information</h3>
            <label>
              Name:
              <input
                type="text"
                name="customerName"
                placeholder="John Doe"
                value={formData.customerName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="text"
                name="phoneNumber"
                placeholder="123-456-7890"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Room Number:
              <input
                type="text"
                name="roomNumber"
                placeholder="Room 101"
                value={formData.roomNumber}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Street:
              <input
                type="text"
                name="street"
                placeholder="123 Main St"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              City:
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              State:
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Time Slot for Delivery:
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                required
              >
                <option value="8-10AM">8-10 AM</option>
                <option value="10-12PM">10-12 PM</option>
                <option value="12-2PM">12-2 PM</option>
                <option value="2-4PM">2-4 PM</option>
                <option value="4-6PM">4-6 PM</option>
              </select>
            </label>
            <button type="submit">Proceed To Payment</button>
          </form>
        </div>
      ) : (
        <p>No product details available.</p>
      )}
    </div>
  );
};

export default OrdersPage;
