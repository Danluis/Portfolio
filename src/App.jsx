import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
function App() {

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
      
    </>
  )
}

export default App
