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
      <div className="cart-outer-container">
        <div className="phrase left-phrase">
          <p>Quality Products</p>
          <p>Best Prices</p>
          <p>Customer Satisfaction</p>
        </div>
        <div className="cart1-image-container">
          <img src="https://img.freepik.com/premium-photo/shopping-cart-full-food-white-background-grocery-food-store-concept-copy-space_985206-207.jpg" alt="Cart" className="cart1-image" />
        </div>
        <div className="phrase right-phrase">
          <p>Fresh Groceries</p>
          <p>Fast Delivery</p>
          <p>24/7 Support</p>
        </div>
      </div>
      <div className="about-container">
        <div className="image-container">
          <img src="https://dis-prod.assetful.loblaw.ca/content/dam/loblaw-companies-limited/creative-assets/freshmart/ogimage-freshmart.jpg" alt="About Us" className="about-image" />
        </div>
        <div className="description-container">
          <h2>About Us</h2>
          <p className='aboutcontent'> 
            Welcome to our company! We are dedicated to providing the best service possible.
            Our team of experts are committed to ensuring customer satisfaction and delivering
            top-notch products. With years of experience in the industry, we strive to exceed
            expectations and build long-lasting relationships with our clients.
          </p>
          <p className='aboutcontent'>
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
      {/* Contributors Section */}
      <div className="contributors-container">
        <div className="contributor">
          <img src="https://www.tata.com/content/dam/tata/images/home-page/desktop/logo_card_desktop_362x362.jpg" alt="Contributor 1" className="contributor-image" />
          <p>Contributor 1</p>
        </div>
        <div className="contributor">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JvGWngfq1j7vtkU_RMVR6EX2giUf5R0fhA&s" alt="Contributor 2" className="contributor-image" />
          <p>Contributor 2</p>
        </div>
        <div className="contributor">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPgnwJxjkNML-Cp64DHoNTlxXDfMqxV0EY3DI1V882lObWHqItFtSOPIK-MKFzLQUXbU&usqp=CAU" alt="Contributor 3" className="contributor-image" />
          <p>Contributor 3</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
