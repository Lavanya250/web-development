import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentEmail, setPaymentEmail] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();
  const { order } = state || {};

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handlePaymentEmailChange = (event) => {
    setPaymentEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the payment data
    const paymentData = {
      orderId: order.id,
      paymentMethod,
      amount: parseFloat(amount), // Ensure the amount is a number
      paymentEmail,
    };

    try {
      // Send payment data to the backend API using axios
      const response = await axios.post('http://127.0.0.1:8080/api/payments', paymentData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Payment processed:', response.data);

      // Navigate to the order confirmation page with the order, paymentMethod, amount, and paymentEmail
      navigate('/orderconfirm', { state: { order, paymentMethod, amount, paymentEmail } });
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
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            required
          >
            <option value="" disabled>Select a payment method</option>
            <option value="UPI">UPI</option>
            <option value="Net Banking">Net Banking</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleAmountChange}
            required
            min="0"
            step="0.01" // Allows decimal values
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentEmail">Payment Email</label>
          <input
            type="email"
            id="paymentEmail"
            name="paymentEmail"
            value={paymentEmail}
            onChange={handlePaymentEmailChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Order</button>
      </form>
    </div>
  );
};

export default PaymentPage;
