import React from 'react'
import '../styles/testimonials.scss'
import avatarImage from "../assets/avatarImage.png";

const Testimonials = () => {
  return (
    <div id='testimonials'>
        <div className="title">
            <h2 className='text-uppercase'>Testimonials</h2>
        </div>
        <section id="testimonials">
        <div className="testimonials">
            <div className="testimonial">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                asperiores eaque.
            </p>
            <div className="info">
                <img src={avatarImage} alt="" />
                <div className="details">
                <h4>Shamim Khaled</h4>
                <span>Frontend Developer - WXYZ QBCDC Ltd</span>
                </div>
            </div>
            </div>
            <div className="testimonial">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                asperiores eaque.
            </p>
            <div className="info">
                <img src={avatarImage} alt="" />
                <div className="details">
                <h4>Shamim Khaled</h4>
                <span>ML Engineer - WXYZ QBCDC Ltd</span>
                </div>
            </div>
            </div>
            <div className="testimonial">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                asperiores eaque.
            </p>
            <div className="info">
                <img src={avatarImage} alt="" />
                <div className="details">
                <h4>Shamim Khaled</h4>
                <span>Backend Developer - WXYZ QBCDC Ltd</span>
                </div>
            </div>
            </div>
        </div>
        </section>

    </div>
  )
}

export default Testimonials