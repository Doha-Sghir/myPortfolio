import { useEffect } from 'react'
import './App.css'
import DefSection from './Components/DefSection'
import NavBar from './Components/NavBar'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, //animation duration in ms
      once: true, //whether animation should happen only once
    })
  }, []);
 
  return (
    <>
     <NavBar />
     <DefSection />
    </>
  )
}

export default App
