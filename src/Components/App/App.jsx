import React from 'react';
import Navbar from './Navbar';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Skills from '../../pages/Skills';
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';
import { useState } from 'react';
import { Link, Element } from 'react-scroll';

function App() {
  // Estado para saber si es hover card de projects
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div className='sm:max-w-full md:max-w-screen '>
        <Navbar />
          <Element name="home">
            <div className='sm:max-w-full md:max-w-screen lg:max-w-full bg-home'>
              <Home />
            </div>
          </Element>
          
          <Element name="about">
            <div className='sm:max-w-full md:max-w-screen lg:max-w-full bg-black'>
              <About />
            </div>
          </Element>
      
          <Element name="skills">
            <div className='sm:max-w-full md:max-w-screen lg:max-w-full bg-home'>
              <Skills />
            </div>
          </Element>
          
          <Element name="projects">
            <div className='sm:max-w-full md:max-w-screen lg:max-w-full bg-black'>
              <Projects/>
            </div>
          </Element>
          
          <Element name="contact">
            <div className='bg-home sm:max-w-full md:max-w-screen lg:max-w-full'>
              <Contact />
            </div>
          </Element>
      
    </div>
  )
}

export default App;
