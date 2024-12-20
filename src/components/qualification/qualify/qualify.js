import React from 'react';
import './qualify.css';
import  ku from '../../../assets/ku.png';
import hse from '../../../assets/hse.jpg';
import icfoss from '../../../assets/icfoss.jpg';
import kerala from "../../../assets/kerala.png";

const  Qualify = () => {
  return (
    <section id='quali'>
        <span className='qualiTitle'>Qualifications</span>
        <span className='qualiDescr'>I'm a Bsc.Computer Science graduate from University of Kerala .</span>
        <div className='qualiBars'>
            <div className='qualiBar'>
                <img src={ku} alt='ku' className='qualiBarImg'></img>
                <div className='qualiBarText'>
                    <h2>University of Kerala</h2><br />
                    <p>Bsc.Computer Science <br /> Government College Kariavattom</p>
                </div>
            </div>
            <div className='qualiBar'>
            <img src={hse} alt='hse' className='qualiBarImg'></img>
                <div className='qualiBarText'>
                    <h2>Kerala Department of Higher Secondary Education</h2><br />
                    <p>Plus Two Computer Science <br /> SNVHSS , Anad</p>
                </div>
            </div>
            <div className='qualiBar'>
            <img src={kerala} alt='hse' className='qualiBarImg'></img>
                <div className='qualiBarText'>
                    <h2>Kerala Board of Public Examinations</h2><br />
                    <p>SSLC <br /> GVHSS , Vithura</p>
                </div>
            </div>
            <div className='qualiBar'>
            <img src={icfoss} alt='icfoss' className='qualiBarImg'></img>
                <div className='qualiBarText'>
                    <h2>icfoss</h2><br />
                    <p>Machine learning with Python ,Women hackathon </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualify