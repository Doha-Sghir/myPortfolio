import { useEffect } from 'react'
import './App.css'
import DefSection from './Components/DefSection'
import NavBar from './Components/NavBar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectSection from './Components/ProjectSection/ProjectSection';
import About from './Components/About';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetails from './Components/ProjectSection/ProjectDetails';
import Skills from './Components/SkillsSection/Skills';
import Connect from './Components/Connect';
import Footer from './Components/Footer';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, //animation duration in ms
      once: false, // allow multiple animations
    })
  }, []);
 
  return (
    <div className="overflow-x-hidden">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={
            <>
              <DefSection />
              <About />
              <Skills />
              <ProjectSection />
              <Connect />
            </>            
          } />
          <Route path='/ProjectDetails/:projectName' element={
            <ProjectDetails />
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
