import React from 'react'
import {Laptop, Wrench, Database, Brain, Pen} from 'lucide-react'
import SkillsCard from './SkillsCard';

const skills = [
  {
    title: 'Web Development',
    icon: Laptop,
    subcategories: [
      {
        title: 'Frontend', 
        skills: ['React', 'Tailwind CSS']
      }, {
        title: 'Backend',
        skills: ['Django', 'ASP.NET', 'Jakarta EE']
      }
    ], 
    delay: 200
  }, {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['GitHub', 'Postman', 'VS Code'],
    delay: 300
  }, {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'SQL Server', 'SQLite', 'Oracle', 'Relational & Object-Oriented DB Design (Oracle)'],
    delay: 400
  }, {
    title: 'Programming Languages',
    icon: Brain,
    skills: ['C', 'C++', 'C#', 'Java', 'Python'],
    delay: 500
  }, {
    title: 'Design & Modeling',
    icon: Pen,
    skills: ['UML diagrams (class, sequence, use case, etc.)', 'Design tools: StarUML'],
    delay: 600
  }
];

export default function Skills() {
  return (
    <div className='bg-zinc-950 py-5 px-10 w-full sm:py-15 sm:px-30 flex flex-col items-center text-white border-t-2 border-zinc-700
                    scroll-mt-20'
      id='Skills'
    >
      <h1 className='mb-14 text-3xl sm:text-4xl font-bold border-b-4 border-mediumPink pb-5'
          data-aos='fade-down' data-aos-delay='100'
      >
        Skills & Expertise
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-20  sm:gap-5'>
        {
          skills.map((element, i) => (
            <SkillsCard key={i} listOfSkills={element} />
          ))
        }
      </div>
    </div>
  )
}
