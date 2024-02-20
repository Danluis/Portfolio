import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects  from './Components/Projects/Projects'
import { useState } from 'react'
function App() {
  //Estado para saber si es hover card de projects
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <>
        <Navbar />
      <div className='bg-home'>
        <Home/>
      </div>
      <div className='bg-black'>
        <About/>
      </div>
      <div className='bg-home'>
        <Skills />
      </div>
      <div className='bg-black'>
        <Projects isHovered={isHovered} setIsHovered={setIsHovered} 
        isHovered2={isHovered2} setIsHovered2={setIsHovered2} 
        isHovered3={isHovered3} setIsHovered3={setIsHovered3}/>
      </div>
    </>
  )
}

export default App
