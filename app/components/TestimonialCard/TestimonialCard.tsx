import React from 'react';
import '../TestimonialCard/TestimonialCard.scss';
import { ImQuotesRight } from 'react-icons/im';

const TestimonialCard = ({
  img,
  p,
  name,
  location,
}: {
  img: any;
  p: any;
  name: any;
  location: any;
}) => {
  return (
    <div className='testimonial-card-main-container'>
      <div>{p}</div>
      <div className='img-name-location-quote-div'>
        <div className='img-name-location-div'>
          <div className='avatar'>
            <img src={img} alt='img' />
          </div>
          <div className='p-tag-div'>
            <p>
              <span>{name}</span>
            </p>
            <p>{location}</p>
          </div>
        </div>
        <div>
          <ImQuotesRight size='2.5rem' color='#ff3e15' />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
