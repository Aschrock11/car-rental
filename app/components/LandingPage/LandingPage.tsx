import React from 'react';
import '../LandingPage/LandingPage.scss';
import { CheckCircleIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const LandingPage = () => {
  return (
    <div id='Home' className='main'>
      <div className='left-container'>
        <h1>Plan your trip now</h1>
        <h2>
          Save <span>big</span> with our car rental
        </h2>
        <p>
          Rent the car of your dreams, unbeatable prices, unlimited miles,
          flexible pick-up options, and much more
        </p>
        <div className='button-div'>
          <button className='book-a-ride'>
            <a href='#Reserve Now'>Book a Ride</a>
            <CheckCircleIcon className='hero-icons' />
          </button>
          <button className='learn-now'>
            <a href='#rental-steps'>Learn More</a>
            <ChevronRightIcon className='hero-icons' />
          </button>
        </div>
      </div>
      <div className='right-container'>
        <img src='../clean-car-rental.jpeg' alt='' />
      </div>
    </div>
  );
};

export default LandingPage;
