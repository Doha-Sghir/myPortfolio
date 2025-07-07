import React from 'react'
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-zinc-900 text-white'>
      <div className=' border-y-2 border-zinc-700 flex justify-center text-center px-5 pt-20 pb-10 text-lg'>
        <div className='w-full sm:w-1/2'>
          <p className='mb-8'>
            Computer Science Engineering student dedicated to crafting smart web apps, clean architectures, and reliable databases — always eager to learn and build.
          </p>
          <p>
            Made with ❤️ and 💻 powered by determination.
          </p>
        </div>
      </div>
      <div className='text-base flex flex-col sm:flex-row justify-around items-center gap-5 py-5'>
        <p>
          Deployed with ❤️ by Doha Sghir
        </p>
        <a href='https://github.com/Doha-Sghir/myPortfolio'
          className='flex items-center gap-5 hover:text-mediumPink'
          target='_blank'  
        >
          <FaGithub />
          Check this on Github
        </a>
      </div>
    </div>
  )
}
