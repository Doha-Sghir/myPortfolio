import React from 'react'

export default function SkillsCard({listOfSkills}) {
  return (
    <div className='bg-zinc-800 px-6 py-8 sm:px-8 sm:py-10 rounded-lg border-2 border-zinc-600'
        data-aos='zoom-in'  data-aos-delay={listOfSkills.delay}
    >
        <div className='flex justify-center gap-5 mb-10 text-xl sm:text-2xl font-bold border-b-2 border-mediumPink pb-5'>
          <listOfSkills.icon className='text-mediumPink' />
          <h2>{listOfSkills.title}</h2>
        </div>
        {listOfSkills?.skills ?
            (
              <div className='flex flex-wrap justify-center gap-5'>
                {listOfSkills.skills.map((element, i) => (
                  <span
                   key={i}
                   className='bg-zinc-600 px-3 py-2 rounded-sm text-base sm:text-lg'
                  >
                    {element}
                  </span>
                ))}
              </div>
              
            ) :
            listOfSkills?.subcategories ? (
              <div className='flex flex-col gap-10'>
                {listOfSkills.subcategories.map((element, i) => (
                  <div className='flex flex-col items-center' 
                  key={i}
                  >
                    {element?.title ? 
                        <span className='bg-mediumPink w-full flex justify-center items-center py-1 sm:py-2 font-semibold mb-5 sm:mb-8 text-lg sm:text-xl'>{element.title}</span> 
                      : null
                    }
                    <div className='flex flex-wrap gap-5'>
                      {element.skills.map((skill, i) => (
                        <span key={i} className='bg-zinc-600 px-3 py-2 rounded-sm text-base sm:text-lg'>{skill}</span>
                      ))}
                    </div>
                  </div>                
                ))}
              </div>
            ) : <em className="text-sm text-zinc-400">No Skills listed</em>
          }
    </div>
  )
}
