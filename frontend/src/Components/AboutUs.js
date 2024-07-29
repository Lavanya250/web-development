import React from 'react';
import './AboutUs.css';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="about-container">
        <div className="image-container">
          <img src="https://dis-prod.assetful.loblaw.ca/content/dam/loblaw-companies-limited/creative-assets/freshmart/ogimage-freshmart.jpg" alt="About Us" className="about-image" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSofvkvOAUEtu4b8LaxLbteyLyGhF2k3d8iLG-AYoFFqTibl-yVPhjckmRA1-f5Llrsuyk&usqp=CAU" alt="About Us" className="about-image" />
        </div>
        <div className="description-container">
          <h2>About Us</h2>
          <p>
            Welcome to our company! We are dedicated to providing the best service possible.
            Our team of experts are committed to ensuring customer satisfaction and delivering
            top-notch products. With years of experience in the industry, we strive to exceed
            expectations and build long-lasting relationships with our clients.
          </p>
          <p>
            Our mission is to innovate and lead in our field, constantly improving and adapting
            to meet the needs of our customers. Thank you for choosing us and we look forward to
            serving you.
          </p>
          <h2>Our Story</h2>
          <p>
            Founded in 2000, our company has grown from a small startup to a leading player in the industry.
            We began with a simple goal: to provide quality products and services to our customers. Over the
            years, we have expanded our offerings and improved our processes, always keeping our customers'
            needs at the forefront of our operations.
          </p>
          <p>
            We believe in the power of innovation and strive to bring the latest advancements to our products
            and services. Our dedicated team works tirelessly to ensure that we remain at the cutting edge of
            the industry, constantly seeking new ways to serve our customers better.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
