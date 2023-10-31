import React from 'react';
import '../styles/about.scss';
import CountUp from 'react-countup';
import aboutImg from '../assets/clients.jpg'

const About = () => {
  return (
  
  <section id='about' className="about-section">
  <div className="about-img">
    <img src={aboutImg} alt="" className="w-100" />
  </div>
  <div className="about-content">
    <h2 className='text-uppercase'>About Us</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
      cupiditate animi deserunt  nesciunt corporis explicabo nobis ex quo
      molestiae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
      cupiditate animi deserunt libero nesciunt corporis explicabo nobis ex quo
      molestiae!
    </p>
    <div className="about-counter">
      <div className="d-flex gap-3 align-items-center">
        <div className="single-counter">
          <span className="counter">
            <CountUp start={0} end={110} duration={4} suffix="+" />
          </span>
          <p className="counter-title">Completed Projects</p>
        </div>

        <div className="single-counter">
          <span className="counter">
            <CountUp start={0} end={75} duration={4} suffix="+" />
          </span>
          <p className="counter-title">Clients Around World</p>
        </div>

        <div className="single-counter">
          <span className="counter">
            <CountUp start={0} end={22} duration={2} suffix="+" />
          </span>
          <p className="counter-title">Ideas Raised Funds</p>
        </div>
      </div>
     
    </div>
  </div>
</section>

  );
};



export default About;
