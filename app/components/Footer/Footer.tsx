import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer-outermost-container'>
      <div className='footer-main-container'>
        <div className='footer-col'>
          <li className='first-li'>
            <span>Car</span> Rental
          </li>
          <p>
            We offer a wide range vehicles for all your driving needs. We have
            the perfect car for you.
          </p>

          <li>614-735-2785</li>
          <li>rentnow@carrental.com</li>
        </div>
        <div className='footer-col'>
          <li className='first-li'>
            <span>Company</span>
          </li>
          <li>New York</li>
          <li>Careers</li>
          <li>Mobile</li>
          <li>BLog</li>
          <li>How we work</li>
        </div>
        <div className='footer-col'>
          <li className='first-li'>
            <span>Working Hours</span>
          </li>
          <li>mon-fri: 9:00am - 9:00pm</li>
          <li>sat: 8:00am - 10:00pm</li>
          <li>sun: closed</li>
        </div>
        <div className='footer-col'>
          <li className='first-li'>
            <span>Subscription</span>
          </li>
          <p>
            Subscribe to get the latest news and first look at upcoming deals
            and promotions.
          </p>
          <input type='text' name='' id='' placeholder='Enter Email Address' />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
