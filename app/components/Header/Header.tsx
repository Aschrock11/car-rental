'use client';
import React, { useState } from 'react';
import '../Header/header.scss';
import { Bars3Icon } from '@heroicons/react/24/solid';
import DrawerComp from '../SliderComp/DrawerComp';

const pages = ['Home', 'Reserve Now', 'Vehicles', 'Why Us', 'Testimonials'];

const Header = () => {
  const [open, setOpen] = useState(false);
  const drawerHandler = () => {
    setOpen(false);
  };

  return (
    <div className='header'>
      <div className='header-content'>
        <div className='hidden'>
          <DrawerComp open={open} drawerHandler={drawerHandler} />
        </div>
        <div className='logo'>
          <img
            src='./rent-a-ride-logo-zip-file/png/logo-no-background.png'
            alt=''
          />
        </div>
        <Bars3Icon className='barsIcon' onClick={() => setOpen(true)} />
        <div className='tabs'>
          {pages.map((page) => (
            <a key={page} href={`#${page}`}>
              <h3>{page}</h3>
            </a>
          ))}
        </div>
        <div className='signup'>
          <li>Sign Up</li>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
