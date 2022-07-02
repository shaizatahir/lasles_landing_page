import React from 'react'
import './Location.css';

import Netflix from '../assets/Netflix.png';
import Global from '../assets/Global.png';
import reddit from '../assets/reddit.png';
import Discord from '../assets/Discord.png';
import Spotify from '../assets/Spotify.png';

const Location = () => {
  return (
    <div className='section_padding'>
    <div className='location_wrapper'>
      <div className='location_head'>
        <h2>Huge Global Network of Fast VPN</h2>
        <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
      </div>
      <div className='location_image'>
        <img src={Global} alt='globe' />
      </div>
    </div>

    <div className='image_wrapper'>
      <div className='image'>
      <img src={Netflix} alt='icon' />
      </div>
      <div className='image'>
      <img src={reddit} alt='icon' />
      </div>
      <div className='image'>
      <img src={Netflix} alt='icon' />
      </div>
      <div className='image'>
      <img src={Discord} alt='icon' />
      </div>
      <div className='image'>
      <img src={Spotify} alt='icon' />
      </div>
    </div>
    </div>
  )
}

export default Location