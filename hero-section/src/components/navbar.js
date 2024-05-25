import React from 'react';

import location from '../assets/images/location.png';
import facebook from '../assets/images/facebook.png';
import insta from '../assets/images/insta.png';
import phone from '../assets/images/phone-icon.png';
import xvector from '../assets/images/xvector.png';
import printerest from '../assets/images/Pinterest.png';

const Navbar = () => {
  return (
    <div>
      <div class="header-wrapper">
        <div class="inner-container">
          <div class="d-flex justify-content-between">
            <div class="header-contact-wrapper">
              <img src={location} alt="location" class="location-icon" />
              <p class="header-text-location">Central Africa, Angola</p>
              <img src={phone} alt="location" class="location-icon" />
              <p class="header-text-location">+244 1234 7890</p>
            </div>
            <div class="header-icon-wrapper">
              <img src={insta} alt="location" class="location-icon" />
              <img src={facebook} alt="location" class="location-icon" />
              <img src={xvector} alt="location" class="location-icon" />
              <img src={printerest} alt="location" class="location-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
