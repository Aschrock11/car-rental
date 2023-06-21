import React from 'react';
import '../Banner/Banner.scss';

const Banner = () => {
  return (
    <div className='banner-main-container'>
      <h1>Save big with our cheap car rental!</h1>
      <div className='h2-div'>
        <span>Top Airports. Local Suppliers. </span>
        <span className='span-target'>24/7 </span>
        <span>Support.</span>
      </div>
    </div>
  );
};

export default Banner;
