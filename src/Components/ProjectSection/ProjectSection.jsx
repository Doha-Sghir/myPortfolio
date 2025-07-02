import React from 'react'
import piImage from '../../assets/ProjectsHomePage/PI.png'
import aspImage from '../../assets/ProjectsHomePage/Asp.png'
import coffeeShopImage from '../../assets/ProjectsHomePage/CoffeeShop.png'
import morocAntikImage from '../../assets/ProjectsHomePage/MorocAntik.png'
import ProjectCard from './ProjectCard'

const projectInfo = [
  {
    id: 1,
    projectName: 'MorocAntik',
    image: morocAntikImage,
    description: 'MorocAntik is an online platform that showcases and sells traditional Moroccan antiques, crafts, and cultural treasures.',
    delay: 300
  }, {
    id: 2, 
    projectName: 'PowerLearn',
    image: aspImage,
    description: 'A website for PowerLearn Center, an educational center, that supports user registration, course enrollment, and management.',
    delay: 500
  }, {
    id: 3,
    projectName: 'SocialProtection',
    image: piImage,
    description: 'Website for managing and exporting social protection consultations at the Prefecture of Fès.',
    delay: 700
  }, {
    id: 4,
    projectName: 'CoffeeShop',
    image: coffeeShopImage,
    description: 'A website for Drink & Smile, a coffee shop, where customers can explore the menu, place orders, and learn about services.',
    delay: 900
  }
]


export default function ProjectSection() {

  return (
    <div className='px-10 sm:px-70 scroll-mt-20 py-10 sm:py-15 bg-zinc-950 text-white border-t-2 border-zinc-700'
          id='Projects'
    >
      <div className='flex justify-center'>
        <h1 className='mb-14 text-3xl sm:text-4xl font-bold border-b-4 border-mediumPink pb-5 inline-block'
            data-aos='fade-down' data-aos-delay='100'
        >
          My Projects
        </h1>
      </div>
      <div  className='flex flex-col gap-10 sm:gap-20'>
        {projectInfo.map(project => (
          <ProjectCard key={project.id} image={project.image} description={project.description} delay={project.delay}
                        projectName={project.projectName}
          />
        ))}
      </div>
    </div>
  )
}
