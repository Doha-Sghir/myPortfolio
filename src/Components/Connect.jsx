import React from 'react'

export default function Connect() {
  return (
    <div className='bg-zinc-950 py-5 px-10 w-full  sm:py-15 lg:px-30  flex flex-col items-center text-white border-t-2 border-zinc-700
                    scroll-mt-20'
        id='Connect'
    >
      <h1 className='mb-14 text-3xl sm:text-4xl font-bold border-b-4 border-mediumPink pb-5'
          data-aos='fade-down' data-aos-delay='100'
      >
        Let's Connect
      </h1>
      <div className='w-full lg:w-1/2 lg:text-lg text-center'>
        <p className='leading-10 pb-10' data-aos='fade-right' data-aos-delay='200'>
          I’m actively seeking new opportunities and collaborations where I can apply my skills and grow as a Computer Science Engineering student. If you’d like to discuss a project, an internship, or simply connect, feel free to reach out!
        </p>
        <div className='mt-8 flex flex-wrap justify-center gap-10'>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sghirdoha2@gmail.com"
            className="text-white bg-zinc-800 px-8 py-4 rounded-lg text-xl font-semibold 
                        hover:bg-mediumPink cursor-pointer inline-block"
            target='_blank'
          >
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/doha-sghir-23a81727b/"
            className="text-white bg-zinc-800 px-8 py-4 rounded-lg text-xl font-semibold 
                        hover:bg-mediumPink cursor-pointer inline-block"
            target='_blank'
          >
            LinkdIn
          </a>
          <a href="https://github.com/Doha-Sghir"
            className="text-white bg-zinc-800 px-8 py-4 rounded-lg text-xl font-semibold 
                        hover:bg-mediumPink cursor-pointer inline-block"
            target='_blank'
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
