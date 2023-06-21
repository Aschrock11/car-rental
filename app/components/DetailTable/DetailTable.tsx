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
    },
    {
      make: 'Audi',
      model: 'A1',
      year: '2010',
      doors: '4',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Unleaded',
    },
    {
      make: 'VW',
      model: 'Golf 6',
      year: '2012',
      doors: '4',
      ac: 'Yes',
      transmission: 'Manual',
      fuel: 'Unleaded',
    },
    {
      make: 'VW',
      model: 'Passat',
      year: '2008',
      doors: '4',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Unleaded',
    },
    {
      make: 'BMW',
      model: '320',
      year: '2013',
      doors: '4',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Premium',
    },
    {
      make: 'Mercedes-Benz',
      model: 'GLK',
      year: '2014',
      doors: '4',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Premium',
    },
  ];

  return (
    <div className='button-table-div'>
      <div className='title-div'>
        <h1>$35 /</h1>
        <h2>rent per day</h2>
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
      <button>
        <a href='#Reserve'>RESERVE NOW</a>
      </button>
    </div>
  );
};

export default DetailTable;
