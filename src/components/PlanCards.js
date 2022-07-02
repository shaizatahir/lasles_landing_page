import React from 'react'
import Free from '../assets/Free.png';
import success from '../assets/success.png';
import './PlanCards.css';

const PlanCards = () => {
  return (
    <div className='planCards'>
      <div className='cards_wrapper section_padding'>
      <div className='plan_head'>
        <h2>Choose Your Plan</h2>
        <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
      </div>
      <div className='card_content'>
        <div className='plan'>
          <img src={Free} alt='free' />
          <h4>Free Plan</h4>
          <ul>
          <li><img className='checkImg' src={success} alt='check' /> 
          Powerfull online protection.</li>
          <li><img src={success} alt='check' />Unlimited Bandwitch</li>
          <li><img src={success} alt='check' />Encrypted Connection</li>
          <li><img src={success} alt='check' />No Traffic Logs</li>
          <li><img src={success} alt='check' />Works on All Devices</li>
        </ul>
        <h3>Free</h3>
        <button className='button_style'>Select</button>
        </div>
        <div className='plan'>
          <img src={Free} alt='free' />
          <h4>Free Plan</h4>
          <ul>
          <li><img src={success} alt='check' /> 
          Powerfull online protection.</li>
          <li><img src={success} alt='check' />Unlimited Bandwitch</li>
          <li><img src={success} alt='check' />Encrypted Connection</li>
          <li><img src={success} alt='check' />No Traffic Logs</li>
          <li><img src={success} alt='check' />Works on All Devices</li>
        </ul>
        <h3>Free</h3>
        <button className='button_style'>Select</button>
        </div>
        <div className='plan'>
          <img src={Free} alt='free' />
          <h4>Free Plan</h4>
          <ul>
          <li><img src={success} alt='check' /> 
          Powerfull online protection.</li>
          <li><img src={success} alt='check' />Unlimited Bandwitch</li>
          <li><img src={success} alt='check' />Encrypted Connection</li>
          <li><img src={success} alt='check' />No Traffic Logs</li>
          <li><img src={success} alt='check' />Works on All Devices</li>
        </ul>
        <h3>Free</h3>
        <button className='button_style'>Select</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default PlanCards