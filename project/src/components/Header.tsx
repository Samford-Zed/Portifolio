import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80"
      }`}
    >
      <div className='container mx-auto px-4 py-4'>
        <nav className='flex items-center justify-between'>
          <div className='text-2xl font-bold text-gray-900'>
            <span className='text-yellow-600'>Samuel</span> Zenebe
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <button
              onClick={() => scrollToSection("home")}
              className='text-gray-700 hover:text-yellow-600 transition-colors duration-200'
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className='text-gray-700 hover:text-yellow-600 transition-colors duration-200'
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className='text-gray-700 hover:text-yellow-600 transition-colors duration-200'
            >
              Certificates
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className='text-gray-700 hover:text-yellow-600 transition-colors duration-200'
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className='text-gray-700 hover:text-yellow-600 transition-colors duration-200'
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className='bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors duration-200'
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4'>
            <div className='flex flex-col space-y-4 px-4'>
              <button
                onClick={() => scrollToSection("home")}
                className='text-gray-700 hover:text-yellow-600 transition-colors duration-200 text-left'
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className='text-gray-700 hover:text-yellow-600 transition-colors duration-200 text-left'
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("certificates")}
                className='text-gray-700 hover:text-yellow-600 transition-colors duration-200 text-left'
              >
                Certificates
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className='text-gray-700 hover:text-yellow-600 transition-colors duration-200 text-left'
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className='text-gray-700 hover:text-yellow-600 transition-colors duration-200 text-left'
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className='bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors duration-200 text-left'
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
