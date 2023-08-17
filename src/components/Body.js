// src/components/Body.js
import React from 'react';
import './Body.css'; // Import the CSS file for Body component
import image1 from '../images/image1.png'; // Import the sample image
import UserGuide from './UserGuide'; // Import the UserGuide component
import TranslatorGuide from './TranslatorGuide'; // Import the TranslatorGuide component

const Body = () => {
  return (
    <main className="body-container">
      {/* First Section */}
      <div className="contentBox">
        <div className="text-container">
          <h1>Translation made Easy</h1>
          <p>
            Lost in translation? Not anymore! Our intuitive app is your
            ultimate multilingual companion, bridging gaps and connecting
            hearts worldwide. Break language barriers and unlock a world of
            possibilities with our cutting-edge translation app!
          </p>
          <button className="read-more-button">Read More</button>
        </div>
        <div className="image-container">
          <img src={image1} alt="Sample" />
        </div>
      </div>

      {/* User Guide */}
      <UserGuide />

      {/* Translator Guide */}
      <TranslatorGuide />
    </main>
  );
};

export default Body;
