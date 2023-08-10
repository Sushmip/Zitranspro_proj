// src/components/Footer.js
import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './AppFooter.css';

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='icons'>
          <TwitterIcon className='icon' />
          <FacebookIcon className='icon' />
          <InstagramIcon className='icon' />
          <LinkedInIcon className='icon' />
        </div>
        <div className='line'>
          <hr />
          <hr />
        </div>
        <div className='copyright'>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
