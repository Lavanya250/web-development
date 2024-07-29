import React, { useState } from 'react';
import './Account.css';
import Header from './Header';

function Account() {
  const [selectedSection, setSelectedSection] = useState('Personal Details');

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const orders = [
    { id: 1, image: 'https://farzana.ae/images/thumbs/0005018_pomegranate.jpeg', name: 'Order #1', description: 'Description for order #1' },
    { id: 2, image: 'https://www.urbangroc.com/wp-content/uploads/2022/08/malta-orange.jpg', name: 'Order #2', description: 'Description for order #2' },
    { id: 2, image: 'https://tiimg.tistatic.com/fp/1/007/836/indian-origin-commonly-cultivated-100-pure-naturally-grown-red-banana-382.jpg', name: 'Order #2', description: 'Description for order #2' },
    { id: 2, image: 'https://fruitique.in/cdn/shop/products/4_750x810.jpg?v=1627403623', name: 'Order #2', description: 'Description for order #2' },
    // Add more orders as needed
  ];

  const payments = [
    { id: 1, method: 'Credit Card', date: '2023-07-01', amount: '$150.00' },
    { id: 2, method: 'PayPal', date: '2023-06-15', amount: '$75.00' },
    // Add more payments as needed
  ];

  const pastOrders = [
    { id: 1, image: 'https://www.veggycation.com.au/siteassets/veggycationvegetable/capsicum-red.jpg', name: 'Past Order #1', description: 'Description for past order #1', date: '2023-05-01' },
    { id: 2, image: 'https://www.vedonic.com/cdn/shop/products/1iVCJLbFAEM_bpHZQDq2FNg5t8xiOa7aX_1024x1024.jpg?v=1659535908', name: 'Past Order #2', description: 'Description for past order #2', date: '2023-04-15' },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAnyjiohwLAAHugV08a2Uk5qSbFz2B4fvoljUqmEj5gYFjuml_9ilMzAOUzDKvEG8guM&usqp=CAU0', name: 'Past Order #2', description: 'Description for past order #2', date: '2023-04-15' },
    // Add more past orders as needed
  ];

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
                  <span>Name: John Doe</span>
                  <button className="edit-button">Edit</button>
                </div>
                <div className="detail-item">
                  <span>Email: john.doe@example.com</span>
                </div>
                <div className="detail-item">
                  <span>Delivery Address: 123 Main St, Springfield</span>
                </div>
              </div>
            </div>
          )}
          {selectedSection === 'My Orders' && (
            <div className="my-orders">
              <h1>My Orders</h1>
              <div className="orders-container">
                {orders.map(order => (
                  <div className="order-card" key={order.id}>
                    <img src={order.image} alt={order.name} className="order-image" />
                    <div className="order-details">
                      <span className="order-name">{order.name}</span>
                      <span className="order-description">{order.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedSection === 'My Payment' && (
            <div className="my-payments">
              <h1>My Payments</h1>
              <div className="payments-container">
                {payments.map(payment => (
                  <div className="payment-card" key={payment.id}>
                    <span className="payment-method">{payment.method}</span>
                    <span className="payment-date">{payment.date}</span>
                    <span className="payment-amount">{payment.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedSection === 'Past Orders' && (
            <div className="past-orders">
              <h1>Past Orders</h1>
              <div className="past-orders-container">
                {pastOrders.map(order => (
                  <div className="past-order-card" key={order.id}>
                    <img src={order.image} alt={order.name} className="past-order-image" />
                    <div className="past-order-details">
                      <span className="past-order-name">{order.name}</span>
                      <span className="past-order-description">{order.description}</span>
                      <span className="past-order-date">{order.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Add similar sections for other parts */}
        </div>
      </div>
    </div>
  );
}

export default Account;
