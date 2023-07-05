'use client';
import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const DrawerComp = ({
  open,
  drawerHandler,
}: {
  open: boolean;
  drawerHandler: () => void;
}) => {
  const pages = [
    'Home',
    'About',
    'Vehicles',
    'Testimonials',
    'Reserve Now',
    'Why Us',
  ];

  return (
    <div className={`drawer ${open && 'appear'}`}>
      <XMarkIcon
        className={`${!open ? 'XMarkIcon' : 'XMarkIconN'}`}
        onClick={() => drawerHandler()}
      />
      <ul className='drawerList'>
        {pages.map((page) => (
          <li key={page} onClick={() => drawerHandler()}>
            <a href={`#${page}`}>{page}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrawerComp;
