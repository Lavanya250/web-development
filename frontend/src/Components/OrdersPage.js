import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrdersPage.css';

const OrdersPage = () => {
  const { state } = useLocation();
  const { order } = state || {};
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const deliveryInfo = {
      name: event.target.name.value,
      phoneNumber: event.target.phoneNumber.value,
      deliveryAddress: event.target.deliveryAddress.value,
      timeSlot: event.target.timeSlot.value,
      paymentMethod: event.target.paymentMethod.value,
    };

    // Navigate to the confirmation page
    navigate('/orderconfirm', { state: { order, deliveryInfo } });
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
              <input type="text" name="name" placeholder="John Doe" required />
            </label>
            <label>
              Phone Number:
              <input type="text" name="phoneNumber" placeholder="123-456-7890" required />
            </label>
            <label>
              Delivery Address:
              <input type="text" name="deliveryAddress" placeholder="123 Main St, City, Country" required />
            </label>
            <label>
              Time Slot for Delivery:
              <select name="timeSlot" required>
                <option value="8-10AM">8-10 AM</option>
                <option value="10-12PM">10-12 PM</option>
                <option value="12-2PM">12-2 PM</option>
                <option value="2-4PM">2-4 PM</option>
                <option value="4-6PM">4-6 PM</option>
              </select>
            </label>
            <h3>Payment Options</h3>
            <label>
              <input type="radio" name="paymentMethod" value="UPI" required />
              UPI
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="Net Banking" required />
              Net Banking
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="Cash on Delivery" required />
              Cash on Delivery
            </label>
            <button type="su">Submit Order</button>
          </form>
        </div>
      ) : (
        <p>No product details available.</p>
      )}
    </div>
  );
};

export default OrdersPage;
