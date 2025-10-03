import React from "react";
import { Code, Palette, Database, Globe, Smartphone, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className='text-yellow-600' size={24} />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 75 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Frameworks",
      icon: <Zap className='text-yellow-600' size={24} />,
      skills: [
        { name: "React", level: 90 },
        { name: "Spring Boot", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
      ],
    },
    {
      title: "Design",
      icon: <Palette className='text-yellow-600' size={24} />,
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Figma", level: 85 },
        { name: "UI/UX Design", level: 85 },
      ],
    },
    {
      title: "Tools",
      icon: <Database className='text-yellow-600' size={24} />,
      skills: [
        { name: "Git", level: 90 },
        { name: "PostgreSQL", level: 80 },
        { name: "Postman", level: 85 },
        { name: "Swagger", level: 75 },
      ],
    },
  ];

  return (
    <section id='skills' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center text-gray-900 mb-16'>
            My <span className='text-yellow-600'>Skills</span>
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className='bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300'
              >
                <div className='flex items-center gap-3 mb-6'>
                  {category.icon}
                  <h3 className='text-xl font-bold text-gray-900'>
                    {category.title}
                  </h3>
                </div>

                <div className='space-y-4'>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className='flex justify-between items-center mb-2'>
                        <span className='text-gray-700 font-medium'>
                          {skill.name}
                        </span>
                        <span className='text-gray-500 text-sm'>
                          {skill.level}%
                        </span>
                      </div>
                      <div className='w-full bg-gray-200 rounded-full h-2'>
                        <div
                          className='bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full transition-all duration-1000 ease-out'
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className='mt-12 text-center'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              <div className='flex flex-col items-center'>
                <Globe className='text-yellow-600 mb-2' size={32} />
                <span className='text-gray-700 font-medium'>
                  Responsive Design
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <Smartphone className='text-yellow-600 mb-2' size={32} />
                <span className='text-gray-700 font-medium'>Mobile First</span>
              </div>
              <div className='flex flex-col items-center'>
                <Zap className='text-yellow-600 mb-2' size={32} />
                <span className='text-gray-700 font-medium'>Performance</span>
              </div>
              <div className='flex flex-col items-center'>
                <Code className='text-yellow-600 mb-2' size={32} />
                <span className='text-gray-700 font-medium'>Clean Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
