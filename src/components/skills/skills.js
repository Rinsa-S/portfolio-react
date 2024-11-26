import React from 'react';
import './skills.css';
import webdesigner from '../../assets/webdesigner.png';
import appdeveloper from '../../assets/appdeveloper.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDescr'>I'm a skilled and passionate web designer in creating visually appealing and user friendly web pages . I have a strong understanding of design and a keen eye foe design .</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={webdesigner} alt='webdesigner' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Web Designer</h2>
                    <p>Creates user friendly Webpages</p>
                </div>
            </div>
            <div className='skillBar'>
            <img src={appdeveloper} alt='appdeveloper' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>Creates user friendly Mobile Apps</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills