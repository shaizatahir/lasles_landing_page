import React from 'react'
import './Hero.css';
import '../App.css';
import Illustration_1 from '../assets/Illustration_1.png';
import users from '../assets/users.png';
import maps from '../assets/maps.png';
import server from '../assets/server.png';

const Hero = () => {
  return (
    <div className='hero_wrapper section_padding'>
      <div className='hero_section'>
        <div className='hero_content'>
          <h1>Want anything to be easy with <span>LaslesVPN.</span></h1>
          <p>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.</p>
          <button>Get Started</button>
        </div>
        <div className='hero-image'>
          <img src={Illustration_1} alt='heroImg' />

        </div>
      </div>
      
      <div className='bar'>
        <div className='content_wrapper'>
          <div className='icon'>
          <img src={users} alt='user' />
          </div>
          <div className='content'>
            <h2>90+</h2>
            <p>Users</p>
          </div>
        </div>
        <div className='border'></div>

        <div className='content_wrapper content_wrapper2'>
          <div className='icon'>
          <img src={maps} alt='user' />

          </div>
          <div className='content'>
            <h2>30+</h2>
            <p>Locations</p>
          </div>
        </div>
        <div className='border'></div>


        <div className='content_wrapper content_wrapper3'>
          <div className='icon'>
            <img src={server} alt='user' />
          </div>
          <div className='content'>
            <h2>50+</h2>
            <p>Servers</p>
          </div>
        </div>

    </div>
    </div>
  )
}

export default Hero