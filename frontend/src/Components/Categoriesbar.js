import React, { useState } from 'react';
import { AppBar, Toolbar, Tab, Menu, MenuItem, TextField, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Categoriesbar.css';
import logo from '../assets/logo.jpg';
import { useCart } from './Cartcontext';

const Categoriesbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { getCartCount } = useCart();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          <div className="cartIcon">
            <Badge badgeContent={getCartCount()} color="primary">
              <Link to="/cart">
                <FaShoppingCart size={24} />
              </Link>
            </Badge>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Categoriesbar;
