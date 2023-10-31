import React from 'react';

import '../styles/choose-us.scss';
import chooseImg from '../assets/feature_3.png'

const Choose = () => {
 
  return (
    <section id='why-us' className="choose-section">
    <div className="choose-content">
      <h2 className='text-uppercase'>Why Choose Us</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia
        nostrum harum eos praesentium odit a sed quod aut fugit. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Reprehenderit omnis, culpa eligendi
        inventore perspiciatis minus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolores cupiditate facilis provident quidem accusamus
        impedit tenetur laboriosam debitis nisi eius!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cupiditate facilis provident quidem accusamus
        impedit tenetur laboriosam debitis nisi eius! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolores cupiditate facilis provident quidem accusamus
        impedit tenetur laboriosam debitis nisi eius!
      </p>
    </div>
    <div className="choose-img">
      <img src={chooseImg} alt="" className="w-100" />
    
    </div>
  </section>
  
  );
};

export default Choose;
