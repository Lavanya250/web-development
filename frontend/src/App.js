import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Adminlogin from './Components/Adminlogin';
import Account from './Components/Account';
import Login from './Components/Login';
import Register from './Components/Register';
import Homepage from './Components/Homepage';
import Categories from './Components/Categories';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Admin from './Components/Admin';
import Shapecards from './Components/Shapecards';
import ExoticFruits from './Components/ExoticFruits';
import OrdersPage from './Components/OrdersPage';
import OrderConfirm from './Components/Orderconfirm';
import { CartProvider } from './Components/Cartcontext';
import Cart from './Components/Cart';

function App() {
  return (
    <div className='App'>
      <CartProvider>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/shapecards" element={<Shapecards />} />
        <Route path="/ExoticFruits" element={<ExoticFruits />} />
        <Route path="/orderspage" element={<OrdersPage />} />
        <Route path="/orderconfirm" element={<OrderConfirm />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="*" element={<Navigate to="/adminlogin" />} /> */}
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
