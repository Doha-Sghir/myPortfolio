import React from 'react'
import profile from '../assets/square_profile.png';

export default function About() {
  
  return (
    <div className='bg-zinc-900 py-5 px-10 w-full sm:py-15 lg:px-30 flex flex-col items-center text-white border-t-2 border-zinc-700
                    scroll-mt-20'
        id='About'
    >
      <h1 className='mb-14 text-3xl sm:text-4xl font-bold border-b-4 border-mediumPink pb-5'
          data-aos='fade-down' data-aos-delay='100'
      >
        About Me
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-1 items-center'>
        <img src={profile} className='w-full lg:w-2/3 bg-white rounded-full border-mediumPink border-4'
              data-aos='fade-right' data-aos-delay='400'
        />  
        <p className='text-lg font-light leading-relaxed'
            data-aos='fade-left' data-aos-delay='600'
        >
          I’m a final-year <span className='font-bold'>Computer Science Engineering student</span> at the <span className='font-bold'>National School of Applied Sciences of Fez</span> , with a curriculum covering a wide range of computer science areas, giving me a broad perspective and versatility. I discovered my passion in <span className='font-bold'>web development</span> and specialize as a <span className='font-bold'>full-stack developer</span>, creating dynamic, responsive, and user-friendly applications. I work with <span className='font-bold'>React.js</span> for frontend development and program in <span className='font-bold'>Java</span> to build efficient and reliable solutions. I also have experience with relational and object-relational databases such as <span className='font-bold'>MySQL, SQL Server, Oracle</span>, and <span className='font-bold'>MongoDB</span>. Always eager to learn and take on new challenges, I am currently looking for a <span className='font-bold'>final-year internship</span> where I can apply my skills and contribute to innovative projects that create real value.
        </p>
      </div> 
    </div>
    
  )
}
