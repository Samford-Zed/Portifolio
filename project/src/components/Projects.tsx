import React from "react";
import { ExternalLink, Github, Monitor } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce website with shopping cart, user authentication, and payment integration.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      githubLink: "https://github.com/Samford-Zed/Advance-java-Project",
      liveLink: "https://ecommerce-demo.netlify.app",
      category: "Full Stack",
    },
    {
      title: "Loan Management System",
      description:
        "A comprehensive loan management system for financial institutions.",
      image:
        "https://newgensoft.com/wp-content/uploads/2024/09/Loan-Management-System.jpg",
      technologies: ["React", "Spring Boot", "Tailwind CSS", "PostgreSQL"],
      githubLink: "https://github.com/Samford-Zed/Loan-Management-System",
      liveLink: "https://loan-management-system-demo.netlify.app",
      category: "Full Stack",
    },
    {
      title: "Smartprep Ethiopia",
      description:
        "SmartPrep Ethiopia personalizes students’ study plans using advanced AI, helping them prepare smarter for Ethiopian national and entrance exams.",
      image:
        "https://image.freepik.com/free-photo/e-learning-student-university-concept_31965-3013.jpg",
      technologies: ["React", "Spring Boot", "Material-UI"],
      githubLink: "https://github.com/Samford-Zed/smartprep-ethiopia",
      liveLink: "https://smartprep-ethiopia.vercel.app/",
      category: "Full Stack",
    },
    {
      title: "Hospital Management System",
      description:
        "A modern, responsive hospital management system for efficient patient care.",
      image:
        "https://verge-ai.com/wp-content/uploads/2023/05/Ushering-in-a-New-Era-of-Healthcare.webp",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/Samford-Zed/Hospital-Management-System",
      liveLink: "https://hospital-management-system-demo.netlify.app",
      category: "Frontend",
    },
  ];

  return (
    <section id='projects' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center text-gray-900 mb-16'>
            My <span className='text-yellow-600'>Projects</span>
          </h2>

          <div className='grid md:grid-cols-2 gap-8'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100'
              >
                <div className='relative h-48 overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                    {project.category}
                  </div>
                </div>

                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {project.title}
                  </h3>
                  <p className='text-gray-600 mb-4'>{project.description}</p>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className='flex gap-4'>
                    <a
                      href={project.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors duration-200'
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors duration-200'
                    >
                      <Monitor size={16} />
                      Live Demo
                    </a> 
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
