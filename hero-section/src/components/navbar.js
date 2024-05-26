import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import location from '../assets/images/location.png';
import facebook from '../assets/images/facebook.png';
import insta from '../assets/images/insta.png';
import phone from '../assets/images/phone-icon.png';
import xvector from '../assets/images/xvector.png';
import printerest from '../assets/images/Pinterest.png';
import profile from '../assets/images/profile.png';

const Navbar = () => {
  return (
    <Fragment>
      <div>
        <div className="header-wrapper">
          <div className="inner-container">
            <div className="d-flex justify-content-between">
              <div className="header-contact-wrapper">
                <img src={location} alt="location" className="location-icon" />
                <p className="header-text-location">Sri Lanka, Colombo</p>
                <img src={phone} alt="location" className="location-icon" />
                <p className="header-text-location">+94 76815 58 44</p>
              </div>
              <div className="header-icon-wrapper">
                <img src={insta} alt="location" className="location-icon" />
                <img src={facebook} alt="location" className="location-icon" />
                <img src={xvector} alt="location" className="location-icon" />
                <img
                  src={printerest}
                  alt="location"
                  className="location-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navigation-section">
        <div className="container inner-container">
          <div className="row">
            <div className="col-3 ">
              <p className="nav-txt-hero">Traveller</p>
            </div>

            <div className="col-7  nav-wapper ">
              <nav className="navbar navbar-expand-lg bg-transparent navbar-inverse">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/">
                        HOME
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/packages">
                        PACKAGES
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        PLACES
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div class="col-2 nav-icon-wrapper ">
              <img src={profile} alt="location" className="profile-icon" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
