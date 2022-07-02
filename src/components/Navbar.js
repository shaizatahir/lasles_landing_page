import React, {useState} from 'react';
import './Navbar.css';
import '../App.css'
import Logo from '../assets/Logo.png';
import menuBar from '../assets/menuBar.svg';
import close from '../assets/close.svg';


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className='navbar section_padding'>
      <div className='nav_logo'>
        <img src= {Logo} alt='logo' />
      </div>

      
      <nav className='nav_links'>
        <a href=''>Home</a>
        <a href=''>Features</a>
        <a href=''>Pricing</a>
        <a href=''>Testimonials</a>
        <a href=''>Help</a>

      </nav>

      <div className='nav_buttons'>
        <a href=''>Sign In</a>
        <button className='signUp'>Sign Up</button>
      </div>
      <div className='smallscreen'>
      <img className='menu' src={menuBar} alt='menu' onClick={() => setMenu(true)} />
      {menu && (
        <div className='responsive_nav'>
          <div className='menu-close'>
      <img src={close} alt='menu' onClick={() => setMenu(false)} />
      </div>
      <div className='responsive_nav_links'>
      <ul>
        <li><a href=''>Home</a></li>
        <li><a href=''>Features</a></li>
        <li><a href=''>Pricing</a></li>
        <li><a href=''>Testimonials</a></li>        
        <li><a href=''>Help</a></li>        

      </ul>
      </div>

      </div>

      )}
      </div>
    </div>
  )
}

export default Navbar