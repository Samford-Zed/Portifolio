import React from "react";
import { MapPin, GraduationCap, Code, Heart } from "lucide-react";

const About = () => {
  return (
    <section id='about' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold text-center text-gray-900 mb-16'>
            About <span className='text-yellow-600'>Me</span>
          </h2>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <p className='text-lg text-gray-600 leading-relaxed'>
                I'm a passionate Full Stack Developer and Computer Science
                student based in Ethiopia. I love creating beautiful, functional
                web experiences that solve real-world problems and make a
                positive impact on users' lives.
              </p>

              <p className='text-lg text-gray-600 leading-relaxed'>
                My journey in web development started with curiosity about how
                websites work, and has evolved into a deep appreciation for
                clean code, user experience, and modern web technologies.
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
                <div className='flex items-center gap-3'>
                  <MapPin className='text-yellow-600' size={20} />
                  <span className='text-gray-700'>Ethiopia</span>
                </div>
                <div className='flex items-center gap-3'>
                  <GraduationCap className='text-yellow-600' size={20} />
                  <span className='text-gray-700'>CSE Student</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Code className='text-yellow-600' size={20} />
                  <span className='text-gray-700'>Full-Stack Developer</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Heart className='text-yellow-600' size={20} />
                  <span className='text-gray-700'>Problem Solver</span>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-yellow-50 to-green-50 p-8 rounded-lg'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                What I Do
              </h3>
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      Web Development
                    </h4>
                    <p className='text-gray-600'>
                      Creating responsive, modern websites and web applications
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      UI/UX Design
                    </h4>
                    <p className='text-gray-600'>
                      Designing intuitive and engaging user interfaces
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      Problem Solving
                    </h4>
                    <p className='text-gray-600'>
                      Finding creative solutions to complex challenges
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>Learning</h4>
                    <p className='text-gray-600'>
                      Continuously improving skills and exploring new
                      technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
