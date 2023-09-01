//style
import './App.css';


import { useState } from 'react';


//components
import Nav from './components/Nav/Nav';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Know from './components/Know/Know';
import Contact from './components/Contact/Contact';
import { animateScroll } from 'react-scroll';
/*import Projects from './Components/Projects';*/
import Socials from './components/Socials/Socials'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleTheme = () => {
    
    setIsDarkMode(prevMode => !prevMode);
  }
 return (
  <div className={`Port ${!isDarkMode ?'light' : ''}`}> 
     <div>
      <Nav isDarkMode={isDarkMode} handleToggle={toggleTheme} />
      <Intro/>
     </div>
     <div className={`middle ${!isDarkMode ?'light' : ''}`}>
     <Skills />
      <Know />
      <Socials />
     </div>
     <div>
      <Contact />
      </div>
     <div className={`middle ${!isDarkMode ?'light' : ''}`}>
      <div className="outro">
        <p></p>
        <div className="arrow" onClick={()=> animateScroll.scrollToTop()}>
          Scroll to home
          </div>
      </div>
   </div>
  </div>
 )
}

export default App;

