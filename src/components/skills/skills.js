import React from 'react';
import './skills.css';
import webdesigner from '../../assets/webdesigner.png';

const Skills = () => {
  return (
    <section id='skills'>
        About Section
        <span className='skillTitle'>WHAT I DO</span>
        <span className='skillDescr'>I'm a skilled and passionate web designer in creating visually appealing and user friendly web pages . I have a strong understanding of design and a keen eye foe design .</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={webdesigner} alt='webdesigner' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Web Designer</h2>
                    <p>Creates user friendly webpages</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills