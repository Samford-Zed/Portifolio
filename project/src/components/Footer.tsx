import React from "react";
import { Github, Linkedin, MessageCircle, Mail, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className='bg-gray-900 text-white py-16'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-4 gap-8'>
            {/* Brand */}
            <div className='md:col-span-2'>
              <div className='text-2xl font-bold mb-4'>
                <span className='text-yellow-600'>Samuel</span> Zenebe
              </div>
              <p className='text-gray-400 mb-6 max-w-md'>
                Full Stack Developer passionate about creating beautiful,
                functional web experiences. Let's build something amazing
                together.
              </p>
              <div className='flex gap-4'>
                <a
                  href='https://github.com/Samford-Zed'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-all duration-200'
                >
                  <Github size={20} />
                </a>
                <a
                  href='https://linkedin.com/in/samuelzenebe'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-all duration-200'
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href='https://t.me/samplehu'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-all duration-200'
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href='mailto:samizenebe508@gmail.com'
                  className='w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-all duration-200'
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
              <div className='space-y-2'>
                <button
                  onClick={() => scrollToSection("home")}
                  className='block text-gray-400 hover:text-yellow-600 transition-colors duration-200'
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className='block text-gray-400 hover:text-yellow-600 transition-colors duration-200'
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className='block text-gray-400 hover:text-yellow-600 transition-colors duration-200'
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className='block text-gray-400 hover:text-yellow-600 transition-colors duration-200'
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className='text-lg font-semibold mb-4'>Contact</h3>
              <div className='space-y-2'>
                <p className='text-gray-400'>
                  <span className='block'>samizenebe508@gmail.com</span>
                </p>
                <p className='text-gray-400'>
                  <span className='block'>Adama, Ethiopia</span>
                </p>
              </div>
            </div>
          </div>

          <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col items-center justify-center text-center'>
            <p className='text-gray-400 text-sm'>
              © 2025 Samuel Zenebe. All rights reserved.
            </p>
            {/*<p className='text-gray-400 text-sm flex items-center gap-2 mt-4 md:mt-0'>
              Made with <Heart className='text-red-500' size={16} /> in Ethiopi
            </p>*/}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
