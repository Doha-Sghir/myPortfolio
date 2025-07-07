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
          I'm a second-year <span className='font-bold'>Computer Science Engineering student</span> at <span className='font-bold'>the National School of Applied Sciences of Fez</span>. I'm passionate about web development, with a strong focus on frontend technologies. I specialize in creating dynamic, responsive, and user-friendly interfaces using <span className='font-bold'>React.js</span>, and I enjoy programming in <span className='font-bold'>Java</span> to build efficient and reliable solutions. I also have experience working with relational and object-relational databases, including <span className='font-bold'>MySQL</span>, <span className='font-bold'>SQL Server</span>, and <span className='font-bold'>Oracle</span>. Always eager to learn and take on new challenges, I aim to contribute my skills to innovative projects that create real value.
        </p>
      </div> 
    </div>
    
  )
}
