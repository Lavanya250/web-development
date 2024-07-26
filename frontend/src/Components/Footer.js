import React from 'react';
import './Footer.css';
// import visa from '../assets/visa.png';
// import mastercard from '../assets/mastercard.png';
// import paypal from '../assets/paypal.png';
// import amex from '../assets/amex.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </nav>
        <div className="payment-options">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGddgbLMSjSWR1gxoLhnRPTDTgmRJjh-x1EEEjCEkOzKu-U84anujJ90md-t1bTVhOakY&usqp=CAU" alt="Visa" />
          <img src="https://media.wired.com/photos/5926dea77034dc5f91bece36/master/w_1600%2Cc_limit/Mastercard3-1.jpg" alt="Mastercard" />
          <img src="https://facts.net/wp-content/uploads/2023/09/15-facts-about-paypal-1694962132.jpg" alt="PayPal" />
          <img src="https://image.spreadshirtmedia.com/image-server/v1/products/T1459A839PA3861PT28D1041652815W10000H2856/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/american-express-amex-logo-sticker.jpg" alt="American Express" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
