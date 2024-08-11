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
      roomNumber: event.target.roomNumber.value,
      street: event.target.street.value,
      city: event.target.city.value,
      state: event.target.state.value,
      timeSlot: event.target.timeSlot.value,
    };

    // Navigate to the payment page
    navigate('/paymentpage', { state: { order, deliveryInfo } });
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
              Room Number:
              <input type="text" name="roomNumber" placeholder="Room 101" required />
            </label>
            <label>
              Street:
              <input type="text" name="street" placeholder="123 Main St" required />
            </label>
            <label>
              City:
              <input type="text" name="city" placeholder="City" required />
            </label>
            <label>
              State:
              <input type="text" name="state" placeholder="State" required />
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
