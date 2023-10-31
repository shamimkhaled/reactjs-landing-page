import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/brand.scss';
import microsoftImage from '../assets/microsoft.png'
import googleImage from '../assets/google.png'
import netflixImage from '../assets/netflix.png'
import amazonImage from '../assets/amazon.png'
import adidasImage from '../assets/adidas.png'
import metaImage from '../assets/meta.png'

const Brand = () => {
  const brandData = [
    {
      image: microsoftImage, 
      
    },
    {
      image: googleImage,
      
    },
    {
      image: netflixImage,
      
    },
    {
      image: amazonImage,
     
    },
    {
      image: adidasImage,
      
    },
    {
      image: metaImage,
      
    },
  ];

  return (
    <div id='brands'>
    <h2>BRANDS</h2>
    <section className="team">
      <Carousel  showArrows={true} showStatus={true} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={2400}>
        {brandData.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={`Brands ${index + 1}`} />
           
          </div>
        ))}
      </Carousel>
    </section>
    </div>
  );
};

export default Brand;
