import React from 'react';
import "./certify.css";
import icfoss from '../../../assets/icfoss.jpg';

const Certify = () => {
  return (
    <div className='certification'>
        <div className='certify'>Certification</div>
        <div className='cBars'>
            <div className='cBar'>
            <img src={icfoss} alt='ku' className='cBarImg'></img>
                <div className='cBarText'>
                    <h2>icfoss</h2><br />
                    <p>Machine learning with Python ,Women hackathon </p>
                     </div>
                
            </div> 
        </div>
    </div>
  )
}

export default Certify ;