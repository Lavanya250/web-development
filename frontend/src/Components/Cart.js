import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Divider, IconButton, Avatar } from '@mui/material';
import { useCart } from './Cartcontext';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate('/orderspage', { state: { cart } });
  };

  if (!cart) {
    return <Typography variant="body1">Error: Cart is not defined</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty</Typography>
      ) : (
        <>
          <List>
            {cart.map((item, index) => (
              <ListItem key={index}>
                <Avatar src={item.image} alt={item.name} sx={{ width: 56, height: 56, marginRight: 2 }} />
                <ListItemText primary={item.name} secondary={`Price: $${item.price} | Quantity: ${item.quantity}`} />
                <IconButton onClick={() => decreaseQuantity(item.id)}>
                  <RemoveIcon />
                </IconButton>
                <IconButton onClick={() => increaseQuantity(item.id)}>
                  <AddIcon />
                </IconButton>
                <IconButton onClick={() => removeFromCart(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Divider style={{ margin: '20px 0' }} />
          <Button variant="contained" color="primary" onClick={handleBuyClick}>
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
