import React from "react";
import '../styles/contact.scss'
import contactImage from '../assets/Frame 19.png'

const Contact = () => {
  return (
    <>
    <h2 className='text-uppercase'>Contact Us</h2>

    <div id="contact" className="contact-form">
      
      <div className="contact-content">
        <p>We'd love to hear from you!</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-image">
        <img src={contactImage} alt="Contact" />
      </div>
    </div>
    </>
  );
};

export default Contact;
