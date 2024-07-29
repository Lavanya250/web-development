import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import logo from '../assets/logo.jpg';
import { FaHome, FaBox, FaClipboardList, FaPercent, FaUsers, FaSignOutAlt } from 'react-icons/fa';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/Adminlogin');
  };

  const renderProducts = () => {
    const products = [
      { id: 1, name: 'Product 1', description: 'Description for product 1', price: '$10', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswRSCROpQXSG1V4d9BorBXKnoLxImPyotgQ&s', quantity: 50, offer: '10% off' },
      { id: 2, name: 'Product 2', description: 'Description for product 2', price: '$20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OvXyIbKSL2DAUf8HgJgeWL4WtcLC_I627A&s', quantity: 30, offer: '15% off' },
      { id: 3, name: 'Product 3', description: 'Description for product 3', price: '$30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJ1hTEAmjhMMglYJ9cKQSwq5Orp_S0SD8XA&s', quantity: 20, offer: '20% off' },
      { id: 4, name: 'Product 3', description: 'Description for product 3', price: '$30', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Kiwi-fruits-582a07b.jpg?quality=90&resize=556,505', quantity: 20, offer: '20% off' },
      { id: 5, name: 'Product 3', description: 'Description for product 3', price: '$30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv16mQSx3cF7qBs4FbJKowZc0BnvzdtAtFfQ&s', quantity: 20, offer: '20% off' },
      { id: 6, name: 'Product 3', description: 'Description for product 3', price: '$30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxAhIhH1ceBFSxON5AQYhL2j6gXOWxm27Pw&s', quantity: 20, offer: '20% off' },
      // Add more products as needed
    ];

    return (
      <div className="products-container">
        <div className="products-header">
          <span>ID</span>
          <span>Image</span>
          <span>Product Name</span>
          <span>Description</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Offer</span>
        </div>
        {products.map(product => (
          <div className="product-row" key={product.id}>
            <span>{product.id}</span>
            <span><img src={product.image} alt={product.name} className="product-image" /></span>
            <span>{product.name}</span>
            <span>{product.description}</span>
            <span>{product.price}</span>
            <span>{product.quantity}</span>
            <span>{product.offer}</span>
          </div>
        ))}
      </div>
    );
  };
  
  const renderOrders = () => {
    const orders = [
      { id: 1, customer: 'Teahyung', product: 'Carrot', quantity: 2, total: '$40', date: '2024-07-20' },
      { id: 2, customer: 'Karthick', product: 'Cake', quantity: 1, total: '$150', date: '2024-07-21' },
      { id: 3, customer: 'Mythili', product: 'Oranges', quantity: 3, total: '$100', date: '2024-07-22' },
      { id: 4, customer: 'Agalya', product: 'Curry leaves', quantity: 2, total: '$20', date: '2024-01-20' },
      { id: 5, customer: 'Ram', product: 'Watermelon', quantity: 1, total: '$80', date: '2023-07-21' },
      { id: 6, customer: 'Aathi', product: 'Sugar', quantity: 3, total: '$90', date: '2024-07-02' },
      { id: 7, customer: 'Sangeetha', product: 'Cups', quantity: 2, total: '$200', date: '2024-02-20' },
      { id: 8, customer: 'Kalai', product: 'Spoons', quantity: 1, total: '$50', date: '2023-07-1' },
      { id: 9, customer: 'Saravanan', product: 'Wter bottle', quantity: 3, total: '$100', date: '2024-07-22' },
      // Add more orders as needed
    ];

    return (
      <div className="orders-container">
        <div className="orders-header">
          <span>ID</span>
          <span>Customer</span>
          <span>Product</span>
          <span>Quantity</span>
          <span>Total</span>
          <span>Date</span>
        </div>
        {orders.map(order => (
          <div className="order-row" key={order.id}>
            <span>{order.id}</span>
            <span>{order.customer}</span>
            <span>{order.product}</span>
            <span>{order.quantity}</span>
            <span>{order.total}</span>
            <span>{order.date}</span>
          </div>
        ))}
      </div>
    );
  };
  const renderUsers = () => {
    const orders = [
      { id: 1, Name: 'Lavanya',LastName:'G', Email: 'Lavanya@gmail.com', Password: '12@345',Date:'24-11-03' },
      { id: 2, Name: 'Sangeetha',LastName:'S', Email: '00@gmail.com', Password:'lava@24t5' ,Date:'23-04-23'},
      { id: 3, Name: 'Agalya',LastName:'G', Email: 'Agal@gmail.com', Password: 'gyi@456',Date:'22-12-04' },
      { id: 4, Name: 'Divish',LastName:'K', Email: 'D@gmail.com', Password: 'wv@134',Date:'21-05-12' },
      { id: 5, Name: 'Kaviya',LastName:'K', Email: 'Ka@gmail.com', Password: '12789',Date:'24-01-25' },
      { id: 6, Name: 'Kalaivani',LastName:'R', Email: 'Kalai@gmail.com', Password: 'lava',Date:'24--12-03' },
      { id: 7, Name: 'Varchini',LastName:'S', Email: 'Vac@gmail.com', Password: 'varchini',Date:'22-11-01' },
      { id: 8, Name: 'Surya',LastName:'M', Email: 'Sur@gmail.com', Password: 'mam' ,Date:'22-02-14'},
      
      // Add more orders as needed
    ];

    return (
      <div className="orders-container">
        <div className="orders-header">
          <span>ID</span>
          <span>Name</span>
          <span>LastName</span>
          <span>Email</span>
          <span>Password</span>
          <span>Date</span>
        </div>
        {orders.map(order => (
          <div className="order-row" key={order.id}>
             <span>{order.id}</span>
            <span>{order.Name}</span>
            <span>{order.LastName}</span>
            <span>{order.Email}</span>
            <span>{order.Password}</span>
            <span>{order.Date}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div>
            <div className="cards-container">
              <div className="card">
                <div className="card-content">
                  <div className="text-content">
                    <h3>Total Orders</h3>
                    <p>This is the content of card 1.</p>
                  </div>
                  <div className="card-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0QgfW4a6IlCA7ovda0QgqlEg4kQpSL4eew&s" alt="Card 1" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="text-content">
                    <h3>Delivered</h3>
                    <p>This is the content of card 2.</p>
                  </div>
                  <div className="card-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SKaBdII-9cJdTRQfFfGuEr3mPUOP_dOfJA&s" alt="Card 2" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="text-content">
                    <h3>Total Users</h3>
                    <p>This is the content of card 3.</p>
                  </div>
                  <div className="card-image">
                    <img src="https://i.pinimg.com/originals/60/07/0e/60070ed889df308cbe80253e8c36b3a3.jpg" alt="Card 3" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="text-content">
                    <h3>Total Products</h3>
                    <p>This is the content of card 4.</p>
                  </div>
                  <div className="card-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3r7HCv392Lv89oPhs7-OFk0s5fvepos85xg&s" alt="Card 4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="parent-container">
              <div>
                <div className="container-title">Top Selling Items</div>
                <div className="child-container">
                  <div className="card">
                    <div className="card-content">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAvZ9RVHnqz7lsUBKXhA8j8B88NG8FmrmjZWuAyjRbOz_JjsBB53WpbjHo3tFUVoZHbvo&usqp=CAU" alt="Child Card 1" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-content">
                      <img src="https://5.imimg.com/data5/SELLER/Default/2022/9/CE/YK/PY/11113009/ambrosia-ak-premium-500g-almond-500x500.jpg" alt="Child Card 2" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-content">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRloP_z9evvNJVcKHJgd4AANUvcEdnFisaT8T7es978V1mH0rEQYzFXXLOx4XTl8MupZXA&usqp=CAU" alt="Child Card 3" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-content">
                      <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Kiwi-fruits-582a07b.jpg?quality=90&resize=556,505" alt="Child Card 4" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="container-title">Top Most Searched Items</div>
                <div className="child-container">
                  <div className="card">
                    <div className="card-content">
                      <img src="https://seed2plant.in/cdn/shop/products/carrotseeds.jpg?v=1604032858&width=416" alt="Child Card 5" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-content">
                      <img src="https://5.imimg.com/data5/SELLER/Default/2023/6/316774192/AM/QQ/MA/3042133/fresh-red-beetroot.jpg" alt="Child Card 6" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-content">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQNMko5GFRT_ftPswTg7KwGv79LKH2xmHiQ&s" alt="Child Card 7" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-content">
                      <img src="https://go-organic.com.au/wp-content/uploads/2022/01/Beetroot.jpg" alt="Child Card 8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'products':
        return renderProducts();
     
      case 'orders':
        return renderOrders();
     
      case 'users':
        return renderUsers();
      default:
        return renderContent;
    }
  };

  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li className={activeSection === 'home' ? 'active' : ''}>
            <a href="#home" onClick={() => setActiveSection('home')}>
              <FaHome /> <span>Home</span>
            </a>
          </li>
          <li className={activeSection === 'products' ? 'active' : ''}>
            <a href="#products" onClick={() => setActiveSection('products')}>
              <FaBox /> <span>Products</span>
            </a>
          </li>
         
          <li className={activeSection === 'orders' ? 'active' : ''}>
            <a href="#orders" onClick={() => setActiveSection('orders')}>
              <FaClipboardList /> <span>Orders</span>
            </a>
          </li>
          
          <li className={activeSection === 'users' ? 'active' : ''}>
            <a href="#users" onClick={() => setActiveSection('users')}>
              <FaUsers /> <span>Users</span>
            </a>
          </li>
          <li>
            <a href="#logout" onClick={handleLogout}>
              <FaSignOutAlt /> <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header1">
          <div className="adminlogo">
            <img src={logo} alt="logo" />
          </div>
          <div className="search-bar1">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Admin;
