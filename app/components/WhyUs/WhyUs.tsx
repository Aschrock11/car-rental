import React from 'react';
import '../WhyUs/WhyUs.scss';

const WhyUs = () => {
  return (
    <div className='whyus-main-container'>
      <img src='./rentalcar.png' alt='' />
      <div>
        <div className='bottom'>
          <div className='bottom-left'>
            <h1>Why Choose Us</h1>
            <h3>Best valued deals you will ever find</h3>
            <p>
              Discover the best deals you will ever find with our unbeatable
              offers. We are dedicated to providing you with the best value for
              your money. That way you can enjoy top-quality services and
              products without breaking the bank. Our deals are designed to give
              you the ultimate renting experience, so dont miss out on you
              chance to save big.
            </p>
            <button>Find Details</button>
          </div>
          <div className='bottom-right'>
            <div className='why-card first-card'>
              <div className='why-img-div'>
                <img src='./carwithluggage.png' alt='' />
              </div>
              <div>
                <h1>Cross Country Drive</h1>
                <p>
                  Take your driving experience to the next level with our top
                  notch vehicles for your cross-country adventures
                </p>
              </div>
            </div>
            <div className='why-card'>
              <div className='why-img-div'>
                <img src='./moneycoin.png' alt='' />
              </div>
              <div>
                <h1>All Inclusive Pricing</h1>
                <p>
                  Get everything you need in one convenient transparent price
                  with our all-inclusive pricing policy
                </p>
              </div>
            </div>
            <div className='why-card'>
              <div className='why-img-div'>
                <img src='./moneytransfer.png' alt='' />
              </div>
              <div>
                <h1>No Hidden Charges</h1>
                <p>
                  Enjoy piece of mind with our No Hidden Charges policy. We
                  believe in transparent honest pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
