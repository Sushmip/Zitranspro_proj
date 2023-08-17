// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';
import logo from '../images/logo.png'; // Import the logo image
import Login from './Login'; // Import the Login component

const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleLoginButtonClick = () => {
    setLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="My Logo" className="logo" />
        </div>
        <div className="button-container">
          <button className="login-button" onClick={handleLoginButtonClick}>
            Login
          </button>
          <button className="about-button">About</button>
        </div>
      </div>
      {isLoginModalOpen && (
        <div className="login-modal">
          <div className="login-content">
            <Login onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
