import React from 'react'

import "../Socials/Socials.css"
import { AiFillInstagram, AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
const Socials = () => {
  return (
    <div className='socials'>
        <h2>Let's Connect</h2>
         <div className="social">
          <div className='git'>
          <AiFillGithub />
          <p>Github</p>
          <a href="https://github.com/Deeptikushwaha" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='link'>
          <AiFillLinkedin />
          <p>Linkedin</p>
          <a href="https://www.linkedin.com/in/deepti-kushwaha-a59490200/" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='insta'>
          <AiFillInstagram />
          <p>Instagram</p>
          <a href="https://www.instagram.com/_deeptikushwah" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        
        <div className='twit'>
          <AiFillTwitterCircle />
          <p>Twitter</p>
          <a href="https://twitter.com/Deeptikushwaha" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        
      </div>
    </div>
  )
}

export default Socials
