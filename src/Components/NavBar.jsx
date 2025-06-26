import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';

const menu = [
  {id: 1, name: 'Home', link: '#'},
  {id: 2, name: 'About', link: '#'},
  {id: 3, name: 'Projects', link: '#'},
  {id: 4, name: 'Skills', link: '#'},
  {id: 5, name: 'Contact', link: '#'},
]

export default function () {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (

    <div>
      {/* Top NavBar */}
      <div className={`grid grid-cols-2 items-center px-10 py-5 bg-gradient-to-tr from-lightPink to-mediumPink 
                      border-b-2 border-gray-700 ${mobileMenu ? 'hidden' : ''}`}
      >
        <p className='font-bonheur font-medium text-4xl sm:w-1/4'>Doha Sghir</p>
        <div className='sm:w-3/4 font-semibold'>
          <div className='hidden sm:flex justify-end gap-10'>
            {menu.map(element =>
              <a key={element.id} href={element.link} 
                className='hover:text-white font-farsan font-light text-2xl'>
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
        <div className='p-7 font-farsan'>
            <div className='flex justify-end mb-10 font-bold'>
              <X onClick={() => setMobileMenu(false)}/>
            </div>
            <div className='grid grid-cols-1 gap-5 px-5 text-2xl'>
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