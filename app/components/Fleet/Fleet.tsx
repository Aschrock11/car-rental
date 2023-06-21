'use client';
import React, { useState } from 'react';
import '../Fleet/Fleet.scss';
import DetailTable from '../DetailTable/DetailTable';

const Fleet = () => {
  const [active, setActive] = useState(0);
  const carImages = [
    {
      img: '../toyotacamry.png',
    },
    {
      img: '../audi.png',
    },
    {
      img: '../vwgolf.png',
    },
    {
      img: '../passat.png',
    },
    {
      img: '../bmw.png',
    },
    {
      img: '../mercedes.png',
    },
  ];

  return (
    <div id='Vehicles' className='fleet-main-container'>
      <div className='fleet-title-div'>
        <h1>Vehicle Models</h1>
        <h2>Our Rental Fleet</h2>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className='fleet-content-containers'>
        <div className='fleet-buttons'>
          <button onClick={() => setActive(0)}>Toyota Camry</button>
          <button onClick={() => setActive(1)}>Audi A1 S-Line</button>
          <button onClick={() => setActive(2)}>VW Golf 6</button>
          <button onClick={() => setActive(3)}>VW Passat</button>
          <button onClick={() => setActive(4)}>BMW 320</button>
          <button onClick={() => setActive(5)}>Mercedes-Benz GLK</button>
        </div>
        <div className='image-detail-div'>
          <div className='img-div'>
            <img src={carImages[active].img} alt='image-of-car' />
          </div>
          <div className='details-table'>
            <DetailTable active={active} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
