import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Homepage.css'; // Import the CSS file
import Navbar from './Navbar'; // Import the Navbar component
import Login from './Login';
import Register from './Register';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
// Home component
function Home() {
  return (
    <div>
      <HomeCarousel />
      <h2>SHOP BY CATEGORY</h2>
      <div className="categories-container">
        <div className="category">
          <img src="https://hips.hearstapps.com/hmg-prod/images/pomegranate-1558625011.jpg?crop=1xw:1xh;center,top&resize=640:*" alt="Fruits" />
          
        </div>
        <div className="category">
          <img src="https://www.vikhrolicucina.com/uploads/stories/1658311473_mixvegetable.jpg" alt="Vegetables" />
          
        </div>
        <div className="category">
          <img src="https://thumbs.dreamstime.com/z/cans-beverages-19492376.jpg" alt="Beverages" />
          
        </div>
        <div className="category">
          <img src="https://cdn.craft.cloud/224393fa-1975-4d80-9067-ada3cb5948ca/assets/Soft-and-Chewy-Chocolate-Chip-Cookie-Recipe-450x300_2022.jpg" alt="Bakery" />
          
        </div>
        <div className="category">
          <img src="https://5.imimg.com/data5/UO/CY/LB/SELLER-8078547/snacks-packing-pouch.jpg" alt=" Snacks" />
          
        </div>
        {/* Add more categories if needed */}
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
