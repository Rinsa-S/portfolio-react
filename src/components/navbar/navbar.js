import React from 'react';
import "./navbar.css";
import logo from "../../assets/MYLOGO.webp";
import {Link as ScrollLink} from "react-scroll";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <div className='desktopMenu'>

      <ScrollLink activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</ScrollLink>
      <ScrollLink activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500}className='desktopMenuListItem'>About</ScrollLink>
      <NavLink activeClass="active" to="/qualify" spy={true} smooth={true} offset={-50} duration={500}className='desktopMenuListItem'>Qualification</NavLink>
      <NavLink activeClass="active" to="/projects" spy={true} smooth={true} offset={-50} duration={500}className='desktopMenuListItem' >Projects</NavLink>
      <NavLink activeClass="active" to="/resume" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Resume</NavLink>

      
    </div>
    <button className='desktopMenuBtn' onClick={() => {
      document.getElementById("contactPage").scrollIntoView({ behavior: "smooth" });;
    } }>
        <svg fill="#000000" width="20px" height="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M10,25.465h13c0.553,0,1-0.448,1-1s-0.447-1-1-1H10c-0.553,0-1,0.448-1,1S9.447,25.465,10,25.465z"></path> <path d="M36,29.465H10c-0.553,0-1,0.448-1,1s0.447,1,1,1h26c0.553,0,1-0.448,1-1S36.553,29.465,36,29.465z"></path> <path d="M36,35.465H10c-0.553,0-1,0.448-1,1s0.447,1,1,1h26c0.553,0,1-0.448,1-1S36.553,35.465,36,35.465z"></path> <path d="M54.072,2.535L19.93,2.465c-3.27,0-5.93,2.66-5.93,5.93v5.124l-8.07,0.017c-3.27,0-5.93,2.66-5.93,5.93v21.141 c0,3.27,2.66,5.929,5.93,5.929H12v10c0,0.413,0.254,0.784,0.64,0.933c0.117,0.045,0.239,0.067,0.36,0.067 c0.276,0,0.547-0.115,0.74-0.327l9.704-10.675l16.626-0.068c3.27,0,5.93-2.66,5.93-5.929v-0.113l5.26,5.786 c0.193,0.212,0.464,0.327,0.74,0.327c0.121,0,0.243-0.022,0.36-0.067c0.386-0.149,0.64-0.52,0.64-0.933v-10h1.07 c3.27,0,5.93-2.66,5.93-5.929V8.465C60,5.196,57.341,2.536,54.072,2.535z M44,40.536c0,2.167-1.763,3.929-3.934,3.929l-17.07,0.07 c-0.28,0.001-0.548,0.12-0.736,0.327L14,53.949v-8.414c0-0.552-0.447-1-1-1H5.93c-2.167,0-3.93-1.763-3.93-3.929V19.465 c0-2.167,1.763-3.93,3.932-3.93l9.068-0.019c0,0,0,0,0,0c0.001,0,0.001,0,0.002,0l25.068-0.052c2.167,0,3.93,1.763,3.93,3.93 v18.441V40.536z M58,29.606c0,2.167-1.763,3.929-3.93,3.929H52c-0.553,0-1,0.448-1,1v8.414l-5-5.5V19.395 c0-3.27-2.66-5.93-5.932-5.93L16,13.514v-5.12c0-2.167,1.763-3.93,3.928-3.93l34.141,0.07c0.001,0,0.001,0,0.002,0 c2.167,0,3.93,1.763,3.93,3.93V29.606z"></path> </g> </g>
        </svg>
        Contact Me
      </button>

    
    </nav>
 )
}

export default Navbar