'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import '../Header/header.scss';
import { Bars3Icon } from '@heroicons/react/24/solid';
import DrawerComp from '../SliderComp/DrawerComp';
import { XMarkIcon } from '@heroicons/react/24/solid';

const pages = ['Home', 'Vehicles', 'Testimonials', 'Our Team', 'Contact'];

const Header = () => {
  const [open, setOpen] = useState(false);
  const drawerHandler = () => {
    setOpen(false);
  };

  return (
    <div className='header'>
      <div className='header-content'>
        <div className='hidden'>
          <XMarkIcon
            className={`${!open ? 'XMarkIcon' : 'XMarkIconN'}`}
            onClick={() => setOpen(false)}
          />
          <DrawerComp open={open} drawerHandler={drawerHandler} />
        </div>
        <div className='logo'>Logo</div>
        <Bars3Icon className='barsIcon' onClick={() => setOpen(true)} />
        <div className='tabs'>
          {pages.map((page) => (
            <a key={page} href={`#${page}`}>
              <h3>{page}</h3>
            </a>
          ))}
        </div>
        <div className='signup'>
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
