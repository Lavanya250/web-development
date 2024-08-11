import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();
  const { order, deliveryInfo } = state || {};

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the payment data
    const paymentData = {
      orderId: order.id,
      paymentMethod,
      amount: order.totalAmount,
      deliveryInfo,
    };

    try {
      // Send payment data to the backend API using axios
      const response = await axios.post('http://127.0.0.1:8080/api/payments', paymentData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Payment processed:', response.data);

      // Navigate to the order confirmation page with the order, deliveryInfo, and paymentMethod
      navigate('/orderconfirm', { state: { order, deliveryInfo, paymentMethod } });
    } catch (error) {
      console.error('Error processing payment:', error);
      // Handle errors (e.g., show an error message to the user)
    }
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
