import React from 'react';

import './Banner.css';
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <i class="bi bi-chevron-down  fs-5"></i>
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcycle</span>
            <span>Mobile Phone</span>
            <span>For Sale:Houses & Apartments</span>
            <span>Commercial & Other Vehicles</span>
          </div>
        </div>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
