import React from 'react';

import dambulla from './assets/images/dambulla.webp';
import pool from './assets/images/pool.webp';
import couple from './assets/images/couple.webp';

const Packages = () => {
  return (
    <div class="packages-sec">
      <div class="container inner-container">
        <div class="package-grid">
          <div className="package-wrapper">
            <img src={couple} alt="couple" className="package-img" />
            <ul>
              <li className="list-items">A/C Vehicle</li>
              <li className="list-items">Tour guide</li>
              <li className="list-items">Insurance</li>
              <li className="list-items">RS.70,000</li>
            </ul>
          </div>

          <div className="package-wrapper">
            <img src={pool} alt="pool" className="package-img" />
            <ul>
              <li className="list-items">Tour guide</li>
              <li className="list-items">Breakfast</li>
              <li className="list-items">Insurance</li>
              <li className="list-items">RS.40,000</li>
            </ul>
          </div>

          <div className="package-wrapper">
            <img src={dambulla} alt="dambulla" className="package-img" />
            <ul>
              <li className="list-items">Non A/C Vehicle</li>
              <li className="list-items">Tour guide</li>
              <li className="list-items">No Insurance</li>
              <li className="list-items">Rs.25,000</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
