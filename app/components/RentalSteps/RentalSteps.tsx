import Image from 'next/image';
import React from 'react';
import '../RentalSteps/RentalSteps.scss';

const RentalSteps = () => {
  return (
    <div id='rental-steps' className='rental-steps-container'>
      <div className='steps-title-div'>
        <h1 id='plan'>Plan your trip now</h1>
        <h2>Quick and easy car rental</h2>
      </div>
      <div className='card-steps'>
        <div className='card'>
          <img src='../carwplus.svg' alt='image of car' />
          <h3>select car</h3>
          <p>
            We offer a big range of vehicles for all your driving needs. We have
            the perfect car for you
          </p>
        </div>
        <div className='card'>
          <img src='../operator.svg' alt='image of operator' />
          <h3>Contact Operator</h3>
          <p>
            Our knowledgable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className='card'>
          <img src='../road-traffic-icon.svg' alt='image of car on road' />
          <h3>lets drive</h3>
          <p>
            Whether you're hitting the interstate or diving city roads, with our
            large range of vehicles we've got you covered
          </p>
        </div>
      </div>
    </div>
  );
};

export default RentalSteps;
