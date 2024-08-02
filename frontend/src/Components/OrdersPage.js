import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrdersPage.css';

const OrdersPage = () => {
  const { state } = useLocation();
  const { order } = state || {};

  return (
    <div className="buy-details-page">
      <h1>Order Details</h1>
      {order ? (
        <div className="order-summary">
          <h2>Product Name: {order.name}</h2>
          <p>Price: ${order.price}</p>
          <p>Quantity: {order.quantity}</p>
          <p>Total: ${(order.price * order.quantity).toFixed(2)}</p>
          <form className="payment-form">
            <h3>Payment Information</h3>
            <label>
              Card Number:
              <input type="text" name="cardNumber" placeholder="1234 5678 9012 3456" required />
            </label>
            <label>
              Expiry Date:
              <input type="text" name="expiryDate" placeholder="MM/YY" required />
            </label>
            <label>
              CVV:
              <input type="text" name="cvv" placeholder="123" required />
            </label>
            <button type="submit">Submit Payment</button>
          </form>
        </div>
      ) : (
        <p>No product details available.</p>
      )}
    </div>
  );
};

export default OrdersPage;
