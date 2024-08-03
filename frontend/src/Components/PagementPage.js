import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();
  const { order, deliveryInfo } = state || {};

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log('Payment method:', paymentMethod);

    // Navigate to the order confirmation page with the order, deliveryInfo, and paymentMethod
    navigate('/orderconfirm', { state: { order, deliveryInfo, paymentMethod } });
  };

  return (
    <div className="payment-page">
      <h2>Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Payment Method</label>
          <div className="payment-options">
            <div>
              <input
                type="radio"
                id="upi"
                name="paymentMethod"
                value="UPI"
                onChange={handlePaymentMethodChange}
                required
              />
              <label htmlFor="upi">UPI</label>
            </div>
            <div>
              <input
                type="radio"
                id="net-banking"
                name="paymentMethod"
                value="Net Banking"
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="net-banking">Net Banking</label>
            </div>
            <div>
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="Cash on Delivery"
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
          </div>
        </div>
        <button type="submit" className="submit-button">Submit Order</button>
      </form>
    </div>
  );
};

export default PaymentPage;
