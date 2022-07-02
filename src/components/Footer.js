import React from 'react'
import Logo from '../assets/Logo.png';
import Facebook from '../assets/Facebook.png';
import Twitter from '../assets/Twitter.png';
import Instagram from '../assets/Instagram.png';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-bg'>
    <div className='section_padding'>
   <div className='Footer'>
      <div className='column_1'>
        <img src={Logo} alt='logo' />
        <p>LaselsVPN is private virtual network that has unique features and has high security.</p>
        <div className='icons'>
          <img src={Facebook} alt='icon' />
          <img src={Twitter} alt='icon' />
          <img src={Instagram} alt='icon' />
        </div>
      </div>
      <div className='column'>
        <p>Product</p>
        <ul>
          <li>Download</li>
          <li>Pricing</li>
          <li>Locations</li>
          <li>Server</li>
          <li>Countries</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className='column'>
      <p>Engage</p>
        <ul>
          <li>LaselsVPN</li>
          <li>FAQ</li>
          <li>Tutorials</li>
          <li>About Us</li>
          <li>Privacy Policy </li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className='column'>
        <p>Earn Money</p>
        <ul>
          <li>Affiliate</li>
          <li>Become Partner</li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Footer