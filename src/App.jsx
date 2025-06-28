import { useEffect } from 'react'
import './App.css'
import DefSection from './Components/DefSection'
import NavBar from './Components/NavBar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectSection from './Components/ProjectSection';
import About from './Components/About';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, //animation duration in ms
      once: false, // allow multiple animations
    })
  }, []);
 
  return (
    <div className="overflow-x-hidden">
     <NavBar />
     <DefSection />
     <About  />
    </div>
  )
}

export default App
