import React from 'react';
import './DownloadApp.scss';

const DownloadApp = () => {
  return (
    <div className='download-main-container'>
      <div className='download-left-container'>
        <h1>Download our app to get the most out of it</h1>
        <p>
          With our app, you'll enjoy seamless navigation, personalized
          recommendations, exclusive offers, and real-time updates right on your
          mobile device. Stay connected with us wherever you go. Download our
          app now and take your interaction with us to the next level!"
        </p>
        <div className='app-buttons'>
          <img src='./badges.jpeg' alt='' />
        </div>
      </div>
      <div className='download-right-container'>
        <img src='./phone.jpg' alt='' />
      </div>
    </div>
  );
};

export default DownloadApp;
