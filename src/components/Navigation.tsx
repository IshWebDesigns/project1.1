import React from 'react';
import { useState, useEffect } from 'react';


export const Navigation = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500`}
    >
      <div
        className={`
          flex items-center justify-between 
          px-6 py-3 rounded-full 
          border border-white/10 
          backdrop-blur-md 
          bg-white/5
          text-white 
          shadow-lg 
          max-w-5xl w-[90vw] 
          transition-all duration-300
          ${scrolled ? 'scale-[0.98] opacity-95' : 'scale-100 opacity-100'}
        `}
      >
        {/* Logo + Nome */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <span className="text-sm font-medium hidden sm:inline text-white">ish.web</span>
        </div>

        {/* Menu */}
        <div className="flex items-center space-x-8">
          {[
            {id: 'home', label: 'Home' }, 
            { id: 'sobre', label: 'Sobre' }, 
            { id: 'projetos', label: 'Projetos' }, 
            { id: 'contato', label: 'Contacto' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-semibold transition-colors duration-300 ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
