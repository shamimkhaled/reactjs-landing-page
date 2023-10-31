import React, { Fragment } from 'react'
import Navbar from './../components/Navbar';
import Hero from './../components/Hero';
import Services from './../components/Services';
import About from './../components/About';
import Testimonials from './../components/Testimonials';
import Choose from './../components/Choose';
import Brand from './../components/Brand';
import Contact from './../components/Contact';
import Newsletter from './../components/Newsletter';
import Footer from './../components/Footer';

import '../styles/main.scss'

const Home = () => {
  return (
    <Fragment className='container'>
      
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Choose />
        <Testimonials />
        <Brand />
        <Contact />
        <Newsletter />
        <Footer />

      
    </Fragment>
  )
}

export default Home