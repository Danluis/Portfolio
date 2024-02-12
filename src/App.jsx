import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
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

      
    </>
  )
}

export default App
