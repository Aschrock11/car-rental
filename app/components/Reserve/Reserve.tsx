'use client';

import React, { useState } from 'react';
import '../Reserve/Reserve.scss';
import SelectDropdown from '../SelectDropdown/SelectDropdown';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/solid';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const Reserve = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const carOptions = [
    'Select car type',
    'Audi A1 S-Line',
    'VW Golf 6',
    'VW Passat',
    'Toyota Camry',
    'BMW 320',
    'Mercedes-Benz GLK',
  ];
  const locationOptions = [
    'Select pickup location',
    'Asheville, NC',
    'Boston, MA',
    'Columbus, OH',
    'New York City, NY',
    'San Diego, CA',
  ];
  const dropLocationOptions = [
    'Select drop-off location',
    'Asheville, NC',
    'Boston, MA',
    'Columbus, OH',
    'New York City, NY',
    'San Diego, CA',
  ];
  return (
    <div id='Reserve Now' className='reserve'>
      <h1>Book a car</h1>
      <div className='tiles'>
        <SelectDropdown
          icon={<i className='large car icon' />}
          title={`Select your car type`}
          options={carOptions}
        />
        <SelectDropdown
          icon={<MapPinIcon className='icon' />}
          title={'Pick-up'}
          options={locationOptions}
        />
        <SelectDropdown
          icon={<MapPinIcon className='icon' />}
          title={'Drop-off'}
          options={dropLocationOptions}
        />
        <div className='date-picker-div'>
          <div className='titleContainer'>
            <CalendarDaysIcon className='icon' />
            <h3>Pick-up</h3>
          </div>
          <DatePicker
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
          />
        </div>
        <div className='date-picker-div'>
          <div className='titleContainer'>
            <CalendarDaysIcon className='icon' />
            <h3>Drop-off</h3>
          </div>
          <DatePicker
            selected={endDate}
            onChange={(date: any) => setEndDate(date)}
          />
        </div>

        <button className='reserveButton'>Search</button>
      </div>
    </div>
  );
};

export default Reserve;
