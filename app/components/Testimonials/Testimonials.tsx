import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.scss';

const Testimonials = () => {
  const maleAvatar = '../maleavatar.jpg';
  const femaleAvatar = '../femaleavatar.jpg';
  return (
    <div id='Testimonials' className='testimonials-main-container'>
      <div className='top'>
        <h1>Reviewed by people</h1>
        <h3>Clients Testimonials</h3>
        <p>
          Discover the positive impact we've made on our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      <div className='bottom'>
        <div className='left'>
          <TestimonialCard
            img={maleAvatar}
            p={
              '"We rented a car from this website and had an amazing experience. The booking was easy and the rental rates were very affordable."'
            }
            name={'Rustin Heiber'}
            location={'Asheville, NC'}
          />
        </div>
        <div className='right'>
          <TestimonialCard
            img={femaleAvatar}
            p={
              '"The car was in great condition and made our trip even better. We highly recommend this car rental website!"'
            }
            name={'Samantha Guffey'}
            location={'Los Angeles, CA'}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
