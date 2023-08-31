import React, { useState } from 'react'

import { FaRegMoon } from "react-icons/fa";
import { Link } from 'react-scroll';
 
import "../Nav/Nav.css"

const Nav = ({ isDarkMode, handleToggle }) => {
    const [isOpen, setIsOpen] = useState(true)

   const move = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='nav'>
      <div className={`header ${!isDarkMode ?'light' : ''}`}>
        <h1>
          <div className='profile'>
            <Link onClick={move} activeClass="active" to="intro" spy={true} smooth={true} offset={-80} duration={500}>
              <img src='/images/profile.jpeg' alt='deep'></img>
            </Link>
          </div>
        </h1>
        <div className='menu'>
            <ul>
                <li><Link onClick={move} activeClass="active" to="know" spy={true} smooth={true} offset={-80} duration={"500"}>About</Link> </li>
                <li><Link onClick={move} activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={"500"} > Contact</Link></li>
                <li><Link onClick={move}  activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={"500"}> Projects</Link></li>
                <li><Link onClick={move}  activeClass="active" to="blog" spy={true} smooth={true} offset={-80} duration={"500"}> Blog</Link></li>
                <li><div className={`theme-switch ${!isDarkMode ?'light' : ''}`} onClick={handleToggle}><FaRegMoon /></div></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav