import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import Products from './components/Products';
// import Category from './components/Category';
// import Orders from './components/Orders';
// import Offer from './components/Offer';
// import Users from './components/Users';
import './Admin.css';

function Admin() {
    return (
        <Router>
            <div className="admin-panel">
                <aside className="sidebar">
                    <h2>Admin Panel</h2>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/category">Category</Link></li>
                            <li><Link to="/orders">Orders</Link></li>
                            <li><Link to="/offer">Offer</Link></li>
                            <li><Link to="/users">Users</Link></li>
                        </ul>
                    </nav>
                </aside>
                <div className="main-content">
                    <header className="header">
                        <input type="text" placeholder="Search..." />
                    </header>
                    <div className="content">
                        <Routes>
                            {/* <Route path="/" element={<Dashboard />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/category" element={<Category />} />
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/offer" element={<Offer />} />
                            <Route path="/users" element={<Users />} /> */}
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Admin;
