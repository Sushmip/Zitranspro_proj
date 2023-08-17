// src/components/UserGuide.js
import React from 'react';
import './Guide.css'; // Import the CSS file for Guide component
import image2 from '../images/image2.png'; // Import the user guide image

const UserGuide = () => {
  return (
    <div className="guide-section">
      <div className="image-container">
        <img src={image2} alt="User Guide" />
      </div>
      <div className="text-container">
        <h2>User Guide</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          dignissim ullamcorper lorem, a laoreet velit. Quisque efficitur augue
          nec velit elementum aliquet. Ut sodales elit ac turpis faucibus, eu
          dapibus dolor tristique. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas.
        </p>
        <button className="read-more-button">Read More</button>
      </div>
    </div>
  );
};

export default UserGuide;
