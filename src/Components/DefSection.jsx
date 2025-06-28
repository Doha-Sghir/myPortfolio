import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const definitions = [
  "I'm a Computer Science Engineering student",
  "I'm a Web Developer",
  "I'm a Java Developer",
];

export default function DefSection() {

  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(600);  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(i => {
        const newIndex = (i + 1) % 3;
        if (newIndex !== 0) {
          setDelay(200);  // After first change, set delay to 200
        }
        return newIndex;
      });
    }, 3000);

    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [index]);

  return (
    <div className='bg-zinc-950 flex flex-col items-center justify-center py-40 sm:py-50 sm:px-40 px-5'>
      <h1 className='text-white text-3xl  sm:text-5xl font-semibold mb-8'>
        Hello I'm 
        <span className='text-mediumPink ml-3' data-aos='fade-right' data-aos-delay='300' data-aos-duration='1000'>
          Doha Sghir
        </span>
      </h1>
      <p key={index} className='text-white text-xl sm:text-2xl mb-8 text-center' data-aos='fade-right' data-aos-delay={delay}>
        {definitions[index]}
      </p>
      <p className="text-white text-lg sm:text-xl text-center max-w-2xl mt-4" data-aos='fade-down' data-aos-delay='1200'> 
        I’m driven by curiosity and a passion for creating solutions that make a difference. Every challenge is a step toward growth.
       </p>
       <div className='mt-15 grid grid-cols-1 sm:grid-cols-2 gap-10 font-semibold'>
        <button className='bg-mediumPink hover:bg-darkPink rounded-lg px-5 py-3 text-lg text-white
                         hover:from-darkPink hover:to-mediumPink cursor-pointer animate-pulse'>
          Explore my work
        </button>
        <button className='text-mediumPink border-mediumPink border-2 rounded-lg px-5 py-3 text-lg cursor-pointer
                            hover:bg-darkPink hover:text-white animate-bounce'>
          Download CV
        </button>
       </div>
    </div>
  );
}
