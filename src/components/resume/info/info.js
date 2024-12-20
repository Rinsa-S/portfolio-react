import React from 'react';
import "./info.css";

const Info = () => {
  return (
    <div className='info'>
        <div className='ihead'>Additional Information</div>
        <ul className='ides' >
            <li>
                <b>* Languages :</b> English , Malayalam , Hindi
            </li>
            <li>
                <b>* Key Skills :</b> C , HTML , ReactJS , Python
            </li>
            <li>
                <b>* Other Skills :</b> Drawing
            </li>
        </ul>
    </div>
  )
}

export default Info;