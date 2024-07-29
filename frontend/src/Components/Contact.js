import React from 'react';
import './Contact.css';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className='contactback'>
      <Header />
      <Navbar />
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>If you have any questions or need further information, feel free to contact us. We are here to help you!</p>
          <p><strong>Email:</strong> info@example.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Address:</strong> 1234 Street Name, Coimbatore, Tamil Nadu, India</p>
        </div>
        <div className="form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
