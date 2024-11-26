import React from 'react';
import './contact.css';
import wp from '../../assets/wp_logo.png';
import ig from '../../assets/inst_logo.png';
import mail from '../../assets/mail_logo.png';
import ln from '../../assets/ln_logo.webp';
import fb from '../../assets/fb_logo.png';
import git from '../../assets/github_logo.webp';

const Contact = () => {
  return (
    <section id='contactPage'>
        <div className='contact'>
          <h1 className='contactTitle'>Contact Me</h1>
          <span className='contactDescr'>Please fill out the below form to discus any work opportunities .</span>
          <form className='contactForm'>
            <input type='text' className='name' placeholder='Your Name'/>
            <input type='email' className='email' placeholder='Your Email'/>
            <textarea className='msg' name='message' rows='5' placeholder='Your Message' />
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className='links'>
              <img src={wp} alt=''className='link' />
              <img src={ig} alt=''className='link' />
              <img src={fb} alt=''className='link' />
              <img src={mail} alt=''className='link' />
              <img src={ln} alt=''className='link' />
              <img src={git} alt=''className='link' />
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact