import React from 'react'

import { SiHtml5,  SiCss3, SiJavascript,  SiReact, SiAdobephotoshop, SiTypescript, SiNodedotjs, SiFigma, SiMongodb } from 'react-icons/si'
import '../Skills/Skills.css'

const Skills = () => {
  return (
      <div>
      <div className='skills'>
        <h2>My Tech-Stack</h2>
        <div className="skill_list">
            <div className="html">
            <SiHtml5 />
            <p>HTML</p>
            </div>
             <div className="css">
            <SiCss3 />
            <p>CSS</p>
            </div>
            <div className="js">
            <SiJavascript />
            <p>JavaScript</p>
            </div>
            <div className="react">
            <SiReact />
            <p>React</p>
            </div>
            <div className="ts">
            <SiTypescript />
            <p>TypeScript</p>
            </div>
            <div className="node">
            <SiNodedotjs />
            <p>Node JS</p>
            </div>
            <div className="fig">
            <SiFigma />
            <p>Figma</p>
            </div>
            <div className="ap">
            <SiAdobephotoshop />
            <p>Adobe</p>
            </div>
            <div className="mon">
            <SiMongodb />
            <p>MongoDB</p>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Skills;