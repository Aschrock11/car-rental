import Image from 'next/image';
import React from 'react';
import '../LandingPage/LandingPage.scss';

const LandingPage = () => {
  return (
    <div id='Home' className='main'>
      <div className='left-container'>
        <h1>Plan your trip now</h1>
        <h2>Save big with our car rental</h2>
        <p>
          Rent the car of your dreams, Unbeatable prices, unlimited miles,
          flexible pick-up options, and much more
        </p>
        <div className='button-div'>
          <button>
            <a href='#Reserve'>book a ride</a>
          </button>
          <button>
            <a href='#rental-steps'>Learn More</a>
          </button>
        </div>
      </div>
      <div className='right-container'>
        {/* <Image
          className='img'
          alt={'image of car'}
          src={
            'https://www.pngall.com/wp-content/uploads/2016/07/Car-Download-PNG.png'
          }
          width={1274}
          height={755}
        /> */}
      </div>
    </div>
  );
};

export default LandingPage;
