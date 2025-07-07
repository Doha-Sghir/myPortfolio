import React from 'react';
import MorocAntik from '../../assets/ProjetsVideo/MorocAntik.mp4';
import Asp from '../../assets/ProjetsVideo/Asp_Project.mp4';
import PI from '../../assets/ProjetsVideo/PI.mp4';
import CoffeeShop from '../../assets/ProjetsVideo/CoffeeShop.mp4';
import { useParams, useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

const projectDetails = {
  MorocAntik: {
    video: MorocAntik,
    description: 'MorocAntik is an online platform that showcases and sells traditional Moroccan antiques, crafts, and cultural treasures.',
    technologies: ['React', 'Tailwind CSS', 'Django', 'Django REST Framework', 'SQLite'],
    githubLink: 'https://github.com/Doha-Sghir/E-commerce-WebSite',
  },
  PowerLearn: {
    video: Asp,
    description: 'A website for PowerLearn Center, an educational center, that supports user registration, course enrollment, and management.',
    technologies: ['ASP.NET Core', 'Entity Framework', 'Razor', 'Bootstrap', 'jQuery'],
    githubLink: 'https://github.com/Doha-Sghir/GestForma',
  }, 
  SocialProtection : {
    video: PI,
    description: 'Website for managing and exporting social protection consultations at the Prefecture of Fès.',
    technologies : ['HTML', 'CSS', 'JavaScript', 'Django', 'SQLite'],
    githubLink: 'https://github.com/Doha-Sghir/initiation-internship-project'
  },
  CoffeeShop : {
    video: CoffeeShop,
    description: 'A website for Drink & Smile, a coffee shop, where customers can explore the menu, place orders, and learn about services.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/Doha-Sghir/Coffee-shop-website'
  }
};

export default function ProjectDetails() {
  const { projectName } = useParams();
  const project = projectDetails[projectName];
  const navigate = useNavigate();

  return (
    <div className="py-40 px-20 grid sm:grid-cols-[7fr_3fr] grid-cols-1 gap-10
                   bg-zinc-900 text-white">
      <video src={project.video} controls className="w-full h-auto border-4 border-zinc-400 rounded-lg" />
      <div className='sm:pt-5'>
        <button 
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              document.querySelector('#Projects').scrollIntoView('smooth');
            }, 100);
          }}
          className='mb-2 cursor-pointer text-mediumPink'
        >
          View all projects
        </button>
        <p className="text-lg mb-10">{project.description}</p>
        <p className="font-semibold mb-5 text-lg"><span className='text-darkPink'>Technologies:</span> {project.technologies.join(', ')}</p>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500  mt-2 flex gap-2 items-center"
        >
          <FaGithub />
          View on GitHub
        </a>
      </div>
    </div>
  );
}
