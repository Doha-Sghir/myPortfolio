import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';

const menu = [
  {id: 1, name: 'Home', link: '#'},
  {id: 2, name: 'About', link: '#about'},
  {id: 3, name: 'Projects', link: '#'},
  {id: 4, name: 'Skills', link: '#'},
  {id: 5, name: 'Contact', link: '#'},
]

export default function () {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (

    <div className=''>
      {/* Top NavBar */}
      <div className={`grid grid-cols-2 items-center px-5 py-5 bg-black
                      border-b-2 border-gray-600 text-white ${mobileMenu ? 'hidden' : ''}
                      fixed top-0 left-0 z-50 w-full`}
      >
        <p className='font-medium text-2xl sm:w-1/4'>Doha Sghir</p>
        <div className='sm:w-3/4 font-semibold'>
          <div className='hidden sm:flex justify-end gap-10'>
            {menu.map(element =>
              <a key={element.id} href={element.link} 
                className='hover:text-mediumPink text-lg font-semibold'>
                {element.name}
              </a>
            )}
          </div>
          <div className='flex justify-end sm:hidden'>
            <Menu onClick={() => setMobileMenu(true)} />
          </div>
        </div>
      </div>
      {/* Menu for Mobile */}
      {
        mobileMenu && 
        <div className='p-7 bg-zinc-900 text-white'>
            <div className='flex justify-end mb-10 font-bold'>
              <X onClick={() => setMobileMenu(false)}/>
            </div>
            <div className='grid grid-cols-1 gap-5 px-5 text-xl'>
              {menu.map(element => 
                <a key={element.id} href={element.link}
                  className='active:text-pink active:font-semibold'
                >
                  {element.name}
                </a>
              )}
            </div>
        </div>
      }
    </div>
    
  )
}