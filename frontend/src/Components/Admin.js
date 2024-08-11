import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import logo from '../assets/logo.jpg';
import { FaHome, FaBox, FaClipboardList, FaPercent, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import axios from 'axios';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token'); // Ensure this token is correctly stored and valid
      if (!token) {
        throw new Error('No token found');
      }

      const response = await axios.get('http://localhost:8080/api/users/getAll', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error.response ? error.response.data : error.message);
      if (error.response && error.response.status === 403) {
        console.error('Access denied. Please check your permissions or token.');
      }
    }
  };

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('token'); // Ensure this token is correctly stored and valid
      if (!token) {
        throw new Error('No token found');
      }

      const response = await axios.get('http://localhost:8080/api/products/getAllproducts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error.response ? error.response.data : error.message);
      if (error.response && error.response.status === 403) {
        console.error('Access denied. Please check your permissions or token.');
      }
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
    window.history.pushState(null, '', window.location.origin);
    window.addEventListener('popstate', function (event) {
      window.history.pushState(null, '', window.location.origin);
    });
  };

  const renderProducts = () => {
    return (
      <div className="products-container">
        <div className="products-header">
          <span>ID</span>
          <span>Name</span>
          <span>Price</span>
          <span>Amount</span>
        </div>
        {products.map(product => (
          <div className="product-row" key={product.id}>
            <span>{product.id}</span>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <span>{product.amount}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderOrders = () => {
    // Placeholder for orders rendering logic
    return <div>Orders Section</div>;
  };

  const renderUsers = () => {
    return (
      <div className="users-container">
        <div className="users-header">
          <span>ID</span>
          <span>Name</span>
          <span>Last Name</span>
          <span>Email</span>
        </div>
        {users.map(user => (
          <div className="user-row" key={user.id}>
            <span>{user.id}</span>
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
            <span>{user.email}</span>
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
        return <div>Select a section</div>;
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
