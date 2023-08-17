// src/components/TranslatorGuide.js
import React from 'react';
import './Guide.css'; // Import the CSS file for Guide component
import image3 from '../images/image3.png'; // Import the translator guide image

const TranslatorGuide = () => {
  return (
    <div className="guide-section">
      <div className="text-container">
        <h2>Translator Guide</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          dignissim ullamcorper lorem, a laoreet velit. Quisque efficitur augue
          nec velit elementum aliquet. Ut sodales elit ac turpis faucibus, eu
          dapibus dolor tristique. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas.
        </p>
        <button className="read-more-button">Read More</button>
      </div>
      <div className="image-container">
        <img src={image3} alt="Translator Guide" />
      </div>
    </div>
  );
};

export default TranslatorGuide;
