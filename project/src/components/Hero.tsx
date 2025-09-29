import React from "react";
import profileImg from "../assets/profile.jpg";
import { ChevronDown, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-green-50'
    >
      <div className='container mx-auto px-4 py-20'>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
          <div className='lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0'>
            <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
              Hi, I'm <span className='text-yellow-600'>Samuel</span> Zenebe
            </h1>
            <p className='text-xl lg:text-2xl text-gray-600 mb-8'>
              Full-Stack Developer & Computer Science Student
            </p>
            <p className='text-lg text-gray-500 mb-8 max-w-2xl'>
              Building modern, responsive, and meaningful web experiences with
              passion for clean code and innovative design.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <button
                onClick={() => scrollToSection("projects")}
                className='bg-yellow-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-all duration-200 hover:scale-105'
              >
                View My Work
              </button>
              {/*<button className='flex items-center justify-center gap-2 border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 hover:text-white transition-all duration-200'>
                <Download size={20} />
                Download CV
              </button>*/}
            </div>
          </div>
          <div className='lg:w-1/2 flex justify-center'>
            <div className='relative'>
              <div className='w-80 h-80 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full opacity-20 absolute -top-4 -left-4'></div>
              <div className='w-72 h-72 bg-gray-300 rounded-full overflow-hidden relative'>
                <img
                  src={profileImg}
                  alt='Samuel Zenebe'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-16'>
          <button
            onClick={() => scrollToSection("about")}
            className='text-yellow-600 hover:text-yellow-700 transition-colors duration-200 animate-bounce'
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
