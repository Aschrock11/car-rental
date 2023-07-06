import React from 'react';
import '../DetailTable/DetailTable.scss';

const DetailTable = ({ active }: { active: any }) => {
  const carDetails: any = [
    {
      make: 'Toyota',
      model: 'Camry',
      year: '2008',
      doors: '4',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Hybrid',
      number: '$35',
    },
    {
      make: 'Audi',
      model: 'A1',
      year: '2010',
      doors: '4',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Unleaded',
      number: '$55',
    },
    {
      make: 'VW',
      model: 'Golf 6',
      year: '2012',
      doors: '4',
      ac: 'Yes',
      transmission: 'Manual',
      fuel: 'Unleaded',
      number: '$35',
    },
    {
      make: 'VW',
      model: 'Passat',
      year: '2008',
      doors: '4',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Unleaded',
      number: '$45',
    },
    {
      make: 'BMW',
      model: '320',
      year: '2013',
      doors: '4',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Premium',
      number: '$55',
    },
    {
      make: 'Mercedes-Benz',
      model: 'GLK',
      year: '2014',
      doors: '4',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Premium',
      number: '$65',
    },
  ];

  return (
    <div className='button-table-div'>
      <div className='title-div'>
        <p>{`${carDetails[active].number} /`}</p>
        <p>rent per day</p>
      </div>
      <div className='detail-table-container'>
        <div>Model</div>
        <div>{carDetails[active].model}</div>
        <div>Make</div>
        <div>{carDetails[active].make}</div>
        <div>Year</div>
        <div>{carDetails[active].year}</div>
        <div>Doors</div>
        <div>{carDetails[active].doors}</div>
        <div>AC</div>
        <div>{carDetails[active].ac}</div>
        <div>Transmission</div>
        <div>{carDetails[active].transmission}</div>
        <div>Fuel</div>
        <div>{carDetails[active].fuel}</div>
      </div>
      <button className='fleet-reserve-now-button'>
        <a href='#Reserve Now'>RESERVE NOW</a>
      </button>
    </div>
  );
};

export default DetailTable;
