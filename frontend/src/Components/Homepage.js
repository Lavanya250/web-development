import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Homepage.css'; // Import the CSS file
import Navbar from './Navbar'; // Import the Navbar component
import Login from './Login';
import Register from './Register';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

// Home component
function Home() {
  return (
    <div>
      <HomeCarousel />
      <h2>SHOP BY CATEGORY</h2>
      <div className="categories-container">
        <div className="category">
          <img src="https://hips.hearstapps.com/hmg-prod/images/pomegranate-1558625011.jpg?crop=1xw:1xh;center,top&resize=640:*" alt="Fruits" />
          <span>Fruits</span>
        </div>
        <div className="category">
          <img src="https://www.vikhrolicucina.com/uploads/stories/1658311473_mixvegetable.jpg" alt="Vegetables" />
          <span>Vegetables</span>
        </div>
        <div className="category">
          <img src="https://thumbs.dreamstime.com/z/cans-beverages-19492376.jpg" alt="Beverages" />
          <span>Beverages</span>
        </div>
        <div className="category">
          <img src="https://cdn.craft.cloud/224393fa-1975-4d80-9067-ada3cb5948ca/assets/Soft-and-Chewy-Chocolate-Chip-Cookie-Recipe-450x300_2022.jpg" alt="Bakery" />
          <span>Bakery</span>
        </div>
        <div className="category">
          <img src="https://5.imimg.com/data5/UO/CY/LB/SELLER-8078547/snacks-packing-pouch.jpg" alt="Snacks" />
          <span>Snacks</span>
        </div>
        <div className="category">
          <img src="https://media.healthyfood.com/wp-content/uploads/2017/03/Ask-the-experts-Raw-chicken.jpg" alt="Non-veg" />
          <span>Non-veg</span>
        </div>
        <div className="category">
          <img src="https://media.sciencephoto.com/image/c0244079/800wm" alt="Household" />
          <span>Household</span>
        </div>
        <div className="category">
          <img src="https://www.greenpan.us/cdn/shop/products/GP_RESERVE_NavyBlue_10pc_Outline1-1200x1200-bd93c0f.jpg?v=1640967134" alt="Kitchenware" />
          <span>Kitchenware</span>
        </div>
        <div className="category">
          <img src="https://safaribags.com/cdn/shop/files/Wing-16_BP_N_Black_02.jpg?v=1707721405" alt="Bags" />
          <span>Bags</span>
        </div>
        <div className="category">
          <img src="https://www.efghfoods.com/wp-content/uploads/2022/06/general_544923805.jpg" alt="Spices" />
          <span>Spices</span>
        </div>
        <div className="category">
          <img src="https://i.pinimg.com/564x/ec/60/9f/ec609f0a8d225d1a2e42dcf74fe0e80d.jpg" alt="Fashion" />
          <span>Fashion</span>
        </div>
        <div className="category">
          <img src="https://image.made-in-china.com/202f0j00kIKqtRiJbocU/Beaver-Baby-Shampoo-Natural-Safe-Baby-Care-Kit-for-Mums-and-Babies.jpg" alt="Babycare" />
          <span>Babycare</span>
        </div>
        {/* Add more categories if needed */}
        <div>
          <h2>SHOP BY WORLD BRANDS</h2>
        </div>
        
      </div>
      
    </div>
    
  );
}

// Categories component
function Categories() {
  return <h2>Categories</h2>;
}

// About component
function About() {
  return <h2>About</h2>;
}

// Contact component
function Contact() {
  return <h2>Contact</h2>;
}

// Carousel component
function HomeCarousel() {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={2000}>
      <div>
        <img src={img1} alt="Slide 1" />
      </div>
      <div>
        <img src={img2} alt="Dairy Products" />
      </div>
      <div>
        <img src={img3} alt="Bakery Items" />
      </div>
    </Carousel>
  );
}

// Main HomePage component
function Homepage() {
  return (
    <Router>
      <div className="homepage-wrapper">
        <Navbar /> {/* Use the Navbar component here */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Homepage;
