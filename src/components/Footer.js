import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 
import '../styles/FooterStyle.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className='me-4 my-3'>
        <h1>SPIKE TECH</h1>
            <p>© 2023 SPIKE TECH. All rights reserved.</p>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-item">
            
            <p><FaPhone className="icon" /> +880-123456-7890</p>
          </div>
          <div className="contact-item">
            
            <p><FaEnvelope className="icon" /> example@spiketech.com</p>
          </div>
          <div className="contact-item">
            
            <p><FaMapMarkerAlt className="icon" /> 1234 Street , Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="section-links">
          <h3>Sections</h3>
          <ul>
            <li><a href="/#home">Home</a></li>
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#services">Services</a></li>
            
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
        <div className="social-links">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
