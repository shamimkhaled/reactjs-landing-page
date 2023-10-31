import React from "react";
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import '../styles/navbar.scss'

const Navbar = () => {
  return (
    <>
      {/* Navbar Component */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse text-uppercase " id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/"><h4>Spike Tech</h4></Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0   "> 
              <li className="nav-item">
                <HashLink className="nav-link active" aria-current="page" to="/">Home</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link active" to="/#about">About</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link active" to="/#services">Services</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link active" to="/#testimonials">Testimonials</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link active" to="/#brands">Brands</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link active" to="/#why-us">Why Us</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link active" to="/#contact">Contact</HashLink>
              </li>
             
            <HashLink  to="/#newsletter"><button className=" text-white nav-link active" >Subscribe</button></HashLink>
              
              
            </ul>

             
          </div>
        </div>
      </nav>
      {/* End of Navbar Component */}
    </>
  );
};

export default Navbar;
