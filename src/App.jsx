import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar'
import {Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/projects'
import Experiences from './pages/Experiences'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="navBar word">
        <NavBar/>
      </div>

      <div className='main'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/experiences' element={<Experiences/>}/>
        </Routes>
      </div>
      <div className="footer">
        <div className="footer-section container-fluid border-top bg-dark pt-3 px-4 text-center">
          <p className="words text-light ps-lg-5 bg-dark">Designed & Developed by Zwe Linn Maung</p>
          <p className="words bg-dark">Let’s work together!</p>
        </div>
      </div>
      
    </div>
  )
}

export default App
