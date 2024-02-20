import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects  from './Components/Projects'
import Example from './Example'
import { useState } from 'react'
function App() {
  //Estado para saber si es hover card de projects
  const [isHovered, setIsHovered] = useState(true);
  const [isHovered2, setIsHovered2] = useState(true);
  const [isHovered3, setIsHovered3] = useState(true);

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
      <Example />
    </>
  )
}

export default App
