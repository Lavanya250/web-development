import React, { useState } from 'react';
import { AppBar, Toolbar, Tab, Menu, MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon
import './Categoriesbar.css';
import logo from '../assets/logo.jpg'; // Update the path to your logo image

const Categoriesbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
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
              <MenuItem onClick={handleClose} component={Link} to="/Shapecards">Fresh Veggies & fruits</MenuItem>
              {/* <MenuItem onClick={handleClose} component={Link} to="/Shapecards">Fresh fruits</MenuItem> */}
              <MenuItem onClick={handleClose} component={Link} to="/ExoticFruits">Exotic Fruits</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/dairy-products">Dairy Products</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/beverages">Beverages</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/snacks">Snacks</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/spices">Spices</MenuItem>
              {/* Add more MenuItem components as needed */}
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
            <FaShoppingCart size={24} /> {/* Adjust size as needed */}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Categoriesbar;
