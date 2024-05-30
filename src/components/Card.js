import React from 'react';
import '../components/Style.scss';
import iconimg from '../assets/Group 27581.png';
import panimg from '../assets/Group 27470.png'
import Input from './Input';

function Card() {
  return (
    <div className='card'>
      <div className='container'>
        <div className='icon_head'>
          <img src={iconimg} alt='icon' />
          <div className='title'>
            <h4>PAN Verification</h4>
            <p>As per regulations, it is mandatory to verify your PAN details.</p>
          </div>
        </div>
        <div className='d-flex'>
          <div className='pan-img'>
            <img src={panimg} />
          </div>
          <div className='title'>
            <Input/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card