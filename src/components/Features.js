import React from 'react'
import './Features.css';
import Illustration_2 from '../assets/Illustration_2.png';
import Check from '../assets/Check.png';

const Features = () => {
  return (
    <div className='feature_wrapper section_padding'>
      <div className='feature_image'>
        <img src={Illustration_2} alt='feature' />

      </div>
      <div className='feature_content'>
        <h2>We Provide Many Features You Can Use</h2>
        <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
        <ul>
          <li><img src={Check} alt='check' /> 
          Powerfull online protection.</li>
          <li><img src={Check} alt='check' />Internet without borders.</li>
          <li><img src={Check} alt='check' />Supercharged VPN</li>
          <li><img src={Check} alt='check' />No specific time limits.</li>
        </ul>


      </div>
    </div>
  )
}

export default Features