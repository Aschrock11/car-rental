'use client';
import React, { useState } from 'react';
import '../SelectDropdown/SelectDropdown.scss';

const SelectDropdown = ({
  calendar,
  icon,
  title,
  options,
}: {
  calendar?: any;
  icon: any;
  title: any;
  options: any;
}) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='gridboxes'>
      <div className='titleContainer'>
        {icon}
        <h3 className='drop-down-header'>{title}</h3>
      </div>
      <select>
        {options.map((option: any) => (
          <option key={option} value='car'>
            {option}
          </option>
        ))}
        {calendar}
      </select>
    </div>
  );
};

export default SelectDropdown;
