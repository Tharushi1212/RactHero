import React from 'react';
import '../assets/app.css';

const Navbar = () => {
  return (
    <div>
      <div class="header-wrapper">
        <div class="inner-container">
          <div class="d-flex justify-content-between">
            <div class="header-contact-wrapper">
              <img
                src="./images/home/location.png"
                alt="location"
                class="location-icon"
              />
              <p class="header-text-location">Central Africa, Angola</p>
              <img
                src="./images/home/phone-icon.png"
                alt="location"
                class="location-icon"
              />
              <p class="header-text-location">+244 1234 7890</p>
            </div>
            <div class="header-icon-wrapper">
              <img
                src="./images/home/insta.png"
                alt="location"
                class="location-icon"
              />
              <img
                src="./images/home/facebook.png"
                alt="location"
                class="location-icon"
              />
              <img
                src="./images/home/xvector.png"
                alt="location"
                class="location-icon"
              />
              <img
                src="./images/home/Pinterest.png"
                alt="location"
                class="location-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
