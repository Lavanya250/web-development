import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Tab, Menu, MenuItem, TextField, Badge } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Categoriesbar.css';
import logo from '../assets/logo.jpg';
import { useCart } from './Cartcontext';

const Categoriesbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const open = Boolean(anchorEl);

  useEffect(() => {
    // Check if the user is authenticated by checking the presence of a token in localStorage
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Set to true if token exists, false otherwise
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCartClick = () => {
    if (isAuthenticated) {
      navigate('/cart');
    } else {
      navigate('/login');
    }
  };

  return (
    <AppBar position="fixed" className="appBar">
      <Toolbar className="toolbar">
        <img src={logo} alt="Grocery Store Logo" className="logo" />
        <div className="tabs">
          <div className="categoryDropdown">
            <Tab label="Categories" onClick={handleClick} />
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} to="/Shapecards">Fresh Veggies & Fruits</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/ExoticFruits">Exotic Fruits</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/dairy-products">Dairy Products</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/beverages">Beverages</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/snacks">Snacks</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/spices">Spices</MenuItem>
            </Menu>
          </div>
          <div className="searchBar">
            <TextField
              variant="outlined"
              placeholder="Search..."
              size="small"
              className="searchInput"
            />
          </div>
          <div className="cartIcon" onClick={handleCartClick}>
            <Badge badgeContent={getCartCount()} color="primary">
              <FaShoppingCart size={24} />
            </Badge>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Categoriesbar;
