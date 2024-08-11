// const handleBuyClick = () => {
//   navigate('/orderspage', { state: { cart } });
// };
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Divider, IconButton, Avatar } from '@mui/material';
import { useCart } from './Cartcontext';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.css'; // Import the CSS file

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (!cart) {
    return <Typography variant="body1">Error: Cart is not defined</Typography>;
  }

  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom className="cart-title">
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1" className="empty-cart">Your cart is empty</Typography>
      ) : (
        <>
          <List>
            {cart.map((item, index) => (
              <ListItem key={index} className="cart-item">
                <Avatar src={item.image} alt={item.name} sx={{ width: 56, height: 56, marginRight: 2 }} />
                <ListItemText primary={item.name} secondary={`Price: $${item.price} | Quantity: ${item.quantity}`} className="cart-item-text" />
                <div className="cart-item-actions">
                  <IconButton onClick={() => decreaseQuantity(item.id)} className="icon-button">
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={() => increaseQuantity(item.id)} className="icon-button">
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={() => removeFromCart(item.id)} className="delete-icon">
                    <DeleteIcon />
                  </IconButton>
                </div>
              </ListItem>
            ))}
          </List>
          <Divider style={{ margin: '20px 0' }} />
          <Button variant="contained" className="checkout-button">
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
