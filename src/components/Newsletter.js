import React, {  } from 'react';
import '../styles/newsletter.scss';

const Newsletter = () => {
 

  return (
    <section id='newsletter' className="newsletter">
    <h2>Subscribe Our Newsletter</h2>
    <div className="subscribe">
      <input type="text" placeholder="Your Email" />
      <button className="btn">SUBSCRIBE</button>
    </div>
  </section>
  );
};

export default Newsletter;
