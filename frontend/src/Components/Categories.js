// Categories.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button, Rating, CardMedia } from '@mui/material';
import './Categories.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Categoriesbar from './Categoriesbar';
import img4 from '../assets/img4.jpg';
import { useCart } from './Cartcontext';

const categories = [
  { id: 1, name: 'Banana', image: 'https://mariadopomar.com/cdn/shop/products/Banana_GB_1250x1026_94a1d2da-f769-4510-9b3e-44e31e69d113_936x768.jpg?v=1626437460', price: 100, amount: 10, rating: 4 },
  { id: 2, name: 'Onion', image: 'https://www.instacart.com/company/wp-content/uploads/2021/08/JulyBlogImages_Jun21_1200x600_Spanish-Onion-1050x525.jpg', price: 150, amount: 5, rating: 3 },
  { id: 3, name: 'Spinach', image: 'https://sahajaaharam.com/files/Spinach.jpg', price: 200, amount: 8, rating: 5 },
  { id: 4, name: 'Tomato', image: 'https://img.jagranjosh.com/images/2022/September/2792022/tomato-compressed.jpg', price: 200, amount: 8, rating: 5 },
  { id: 5, name: 'Watermelon', image: 'https://farmtodoorstep.co/wp-content/uploads/2020/05/watermelon.jpg', price: 200, amount: 8, rating: 5 },
  { id: 6, name: 'Coconut', image: 'https://fruve.co.uk/cdn/shop/products/Coconuts_dcfd46b6-92f3-412e-bee2-be00ead4e08d_2048x.jpg?v=1592936035', price: 200, amount: 8, rating: 5 },
  { id: 7, name: 'Mushroom', image: 'https://assets.technologynetworks.com/production/dynamic/images/content/345123/a-mushroom-a-day-keeps-the-doctor-away-345123-960x540.jpg?cb=11092862', price: 200, amount: 8, rating: 5 },
  { id: 8, name: 'Cucumber', image: 'https://edentreegh.com/wp-content/uploads/2020/12/cucumber-vegetable-isolated-white-background_42033-135.jpg', price: 200, amount: 8, rating: 5 },
  { id: 9, name: 'Cauliflower', image: 'https://qph.cf2.quoracdn.net/main-qimg-b7dfca01a7189ec36ef57f612c7ea1a5-lq', price: 200, amount: 8, rating: 5 },
];

const topOffers = [
  { id: 1, name: 'Deals of the Week' },
  { id: 2, name: 'Big Big Deals' },
  { id: 3, name: 'Special Discounts' },
  { id: 4, name: 'Limited Time Offers' },
];

const Categories = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleBuyClick = (category) => {
    navigate('/orderspage', { state: { order: { ...category, quantity: 1 } } });
  };

  return (
    <div>
      <Categoriesbar />
      <Navbar />
      <Container>
        <CardMedia
          component="img"
          image={img4}
          alt="Poster Image"
          style={{ marginBottom: '20px' }}
        />
        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.id}>
              <Card className="card1">
                <CardMedia
                  component="img"
                  height="200"
                  image={category.image}
                  alt={category.name}
                />
                <CardContent className="card-content1">
                  <Typography variant="h5" component="div">
                    {category.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${category.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Amount: {category.amount}
                  </Typography>
                  <Rating value={category.rating} readOnly />
                </CardContent>
                <CardActions>
                  <Button
                    className="add-button1"
                    size="small"
                    onClick={() => addToCart(category)}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    className="buy1"
                    onClick={() => handleBuyClick(category)}
                  >
                    Buy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" component="h2" style={{ marginTop: '40px', marginBottom: '20px', textAlign: 'center' }}>
          Top Offers
        </Typography>

        <Grid container spacing={4}>
          {topOffers.map((offer) => (
            <Grid item xs={12} sm={6} md={3} key={offer.id}>
              <Card className={`offer-card offer-card-${offer.id}`}>
                <CardContent className="offer-card-content">
                  <Typography variant="h5" component="div">
                    {offer.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Categories;
