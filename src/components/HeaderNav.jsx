import React from 'react';
import {Link} from 'react-router-dom'
import GapwayLogo from '../img/GapwayLogo.JPG'

const HeaderNav = () => {
  return (
    <div className="menu-container">
      <section className="contact-container">
        <div className="contact-left">
          <h4 className="contact-item">555-555-5555</h4>
          <h4 className="contact-item">email@email.com</h4>
        </div>
        <div className="contact-right">
          <h4 className="contact-item">FB</h4>
          <h4 className="contact-item">YT</h4>
        </div>
      </section>
      <section className="nav-container">
        <div className="logo-left">
          <img className="header-logo" src={GapwayLogo} alt="" />
        </div>
        <div className="navlink-right">
          <Link className="navlink" to="/">Home</Link>
          <Link className="navlink" to="/services">Service Times</Link>
          <Link className="navlink" to="/sermons">Sermons</Link>
          <Link className="navlink" to="/events">Special Events</Link>
          <Link className="navlink" to="/about">About Us</Link>
        </div>
      </section>
    </div>
  );
}

export default HeaderNav;
