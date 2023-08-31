import React from 'react'
import "../Intro/Intro.css"
import Button from '../Button/Button'

import {Link} from 'react-scroll';
import {saveAs} from "file-saver";

const Intro = () => {

  const handleresume = () =>{
    saveAs(
      "Resume.pdf"
    )
  }
  return (
      <div className='intro' id='intro'>
        <div className='intro-box'>
          <div className='name'> 
          <p>Hi, I'm Deepti Kushwaha!</p>
          <text>mern developer | undergrad</text>
          </div>
          <div className='buttons'>
           <div onClick={handleresume} className='btn_2'><Button text='Resume' /></div>
            <Link className='btn_1' activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={500} > <Button text='Drop a email' /></Link>
          </div>
        </div>
      </div>
    
  )
}

export default Intro