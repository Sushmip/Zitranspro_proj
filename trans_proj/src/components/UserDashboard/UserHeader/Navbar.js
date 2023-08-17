import React, { useState } from 'react';
import logo from '../../../images/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';
import Menu from './Menu';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="NavbarItems">
      <div className="logo-container">
        <img src={logo} alt="My Logo" className="logo" />
      </div>
      <div className="hamburger-icon" onClick={handleToggleMenu}>
        <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={`NavMenu ${showMenu ? 'show-on-small-screen' : ''}`}>
        {Menu.map((item, index) => (
          <li key={index}>
            <a href={item.url} className={item.cName}>
              <i className={item.icon}></i>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
