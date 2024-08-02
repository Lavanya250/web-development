import React from 'react';
import { useLocation } from 'react-router-dom';
import './Orderconfirm.css';
import { FaCheckCircle } from 'react-icons/fa';

const Orderconfirm = () => {
  const { state } = useLocation();
  const { order, deliveryInfo } = state || {};

  return (
    <div className="confirmation-page">
      <FaCheckCircle className="checkmark-icon" />
      <h1>Order Placed Successfully!</h1>
      {order && deliveryInfo ? (
        <div className="order-details">
          <p><strong>Product Name:</strong> {order.name}</p>
          <p><strong>Quantity:</strong> {order.quantity}</p>
          <p><strong>Total Amount:</strong> ${(order.price * order.quantity).toFixed(2)}</p>
          <p><strong>Delivery Address:</strong> {deliveryInfo.deliveryAddress}</p>
          <p><strong>Time Slot:</strong> {deliveryInfo.timeSlot}</p>
          <div className="rating-section">
            <label>
              <strong>Rate Your Experience:</strong>
              <select name="rating" required>
                <option value="5">Excellent</option>
                <option value="4">Very Good</option>
                <option value="3">Good</option>
                <option value="2">Fair</option>
                <option value="1">Poor</option>
              </select>
            </label>
          </div>
        </div>
      ) : (
        <p>Order details are not available.</p>
      )}
    </div>
  );
};

export default Orderconfirm;
