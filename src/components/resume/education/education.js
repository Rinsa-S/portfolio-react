import React from 'react';
import "./education.css";
import  ku from '../../../assets/ku.png';
import hse from '../../../assets/hse.jpg';
import kerala from "../../../assets/kerala.png";

const Qualification = () => {
  return (
    <div className='education'>
        <div className='eduHead'>Education</div>
       
        <div className='Bars'>
            <div className='Bar'>
            <img src={ku} alt='ku' className='BarImg'></img>
                <div className='BarText'>
                    <h2>University of Kerala</h2><br />
                    <p>Bsc.Computer Science <br /> Government College Kariavattom <br /> 2021 - 2024</p>
                    </div>
                
            </div>

            <div className='Bar'>
            <img src={hse} alt='ku' className='BarImg'></img>
                <div className='BarText'>
                    <h2>Kerala Department of Higher Secondary Education</h2><br />
                    <p>Plus Two Computer Science <br /> SNVHSS , Anad <br /> 2019 - 2021</p>
                </div>
                
            </div>

            <div className='Bar'>
            <img src={kerala} alt='ku' className='BarImg'></img>
                <div className='BarText'>
                    <h2>Kerala Board of Public Examinations</h2><br />
                    <p>SSLC <br /> GVHSS , Vithura <br /> 2018 - 2019</p>
                     </div>
                
            </div>

            
        </div>
        
    </div>
  )
}

export default Qualification ;