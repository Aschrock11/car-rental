'use client';
import React, { useState } from 'react';

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
    'Our Team',
    'Contact',
  ];

  return (
    <div className={`drawer ${open && 'appear'}`}>
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
