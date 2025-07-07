import React, { useEffect, useState, useRef } from 'react'


export default function ({ image, description, delay, projectName }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(containerRef.current && !containerRef.current.contains(event.target)){
        setShowOverlay(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [])

  return (
    <div
      ref={containerRef}
      data-aos="zoom-in"
      data-aos-delay={delay}
      className="relative group w-full rounded-xl sm:rounded-2xl overflow-hidden border-2 border-zinc-700"
    >
      <img
        src={image}
        alt={description}
        className="w-full h-auto block"
        onClick={() => setShowOverlay(true)}
      />
      <div
        className={`
          absolute inset-0 
          bg-zinc-900
          flex flex-col items-center justify-center gap-5 sm:gap-10
          ${showOverlay ? 'opacity-90 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          
          sm:opacity-0 sm:pointer-events-none
          sm:group-hover:opacity-90 sm:group-hover:pointer-events-auto
          text-white text-center sm:px-40 px-5
          transition-opacity duration-300
          sm:text-xl font-semibold
          text-sm
        `}
      >
        <p>{description}</p>
        <button className='bg-mediumPink hover:bg-darkPink rounded-lg px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-lg text-white
                         hover:from-darkPink hover:to-mediumPink cursor-pointer'>
          <a href={`/ProjectDetails/${projectName}`}>
            Explore Project
          </a>
        </button>
      </div>
    </div>
  )
}
