import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const menu = [
  {id: 1, name: 'Home', link: '/'},
  {id: 2, name: 'About', link: '#About'},
  {id: 3, name: 'Skills', link: '#Skills'},
  {id: 4, name: 'Projects', link: '#Projects'},
  {id: 5, name: 'Contact', link: '#Connect'},
]

export default function () {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentElement, setCurrentElement] = useState('Home');

  const handleClick = (element) => {

    setMobileMenu(false);
    if (element.link === '/') {
      if(location.pathname !== '/')
        navigate('/');
      else
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
    } else {
      if (location.pathname !== '/') {
        navigate('/', { replace: false });
        setTimeout(() => {
          const el = document.querySelector(element.link);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(element.link);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setCurrentElement(element.name);
    localStorage.setItem('cNavbar', element.name);
  };


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
              <button key={element.id} onClick={() => handleClick(element)} 
                className={`hover:text-mediumPink text-lg font-semibold 
                            ${currentElement === element.name ? 'text-mediumPink' : ''}`}>
                {element.name}
              </button>
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
        <div className='p-7 bg-zinc-900 text-white fixed top-0 left-0 z-50 w-full'>
            <div className='flex justify-end mb-10 font-bold'>
              <X onClick={() => setMobileMenu(false)}/>
            </div>
            <div className='grid grid-cols-1 gap-5 px-5 text-xl'>
              {menu.map(element => 
                <button key={element.id} onClick={() => handleClick(element)}
                  className='active:text-pink active:font-semibold text-left'
                >
                  {element.name}
                </button>
              )}
            </div>
        </div>
      }
    </div>
    
  )
}