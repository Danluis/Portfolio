import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects  from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import { useState } from 'react'
function App() {
  //Estado para saber si es hover card de projects
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div className='sm:max-w-full md:max-w-screen '>
        <Navbar />
      <div className='sm:max-w-full md:max-w-screen lg:max-w-full bg-home'>
        <Home/>
      </div>
      <div className='sm:max-w-full md:max-w-screen lg:max-w-full bg-black'>
        <About/>
      </div>
      <div className='sm:max-w-full md:max-w-screen lg:max-w-full bg-home'>
        <Skills />
      </div>
      <div className='sm:max-w-full md:max-w-screen lg:max-w-full bg-black'>
        <Projects isHovered={isHovered} setIsHovered={setIsHovered} 
        isHovered2={isHovered2} setIsHovered2={setIsHovered2} 
        isHovered3={isHovered3} setIsHovered3={setIsHovered3}/>
      </div>
      <div className='bg-home sm:max-w-full md:max-w-screen lg:max-w-full'>
        <Contact />
      </div>
    </div>
  )
}

export default App
