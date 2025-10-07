import React, { useEffect, useState } from 'react';
import { FaChrome, FaDiscord, FaFigma, FaGithub, FaSlack, FaSpotify, FaSteam, FaXTwitter, FaYoutube } from "react-icons/fa6";
import {  SiAdobeaftereffects,  SiAdobelightroom, SiAdobephotoshop, SiAdobepremierepro, SiNotion, SiXcode } from "react-icons/si";
import { BsCalendarDate } from "react-icons/bs";
import { BiLogoVisualStudio } from 'react-icons/bi';

export const FloatingApps = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('sobre');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const apps = [
    { name: 'Figma', icon: <FaFigma size={32} />, color: 'from-pink-500 to-purple-600', position: 'top-[10%] left-[10%]' },
    { name: 'Lightroom', icon: <SiAdobelightroom size={32} />, color: 'from-blue-400 to-blue-600', position: 'top-[5%] left-[40%]' },
    { name: 'Premiere', icon: <SiAdobepremierepro size={32} />, color: 'from-purple-600 to-indigo-700', position: 'top-[5%] right-[25%]' },
    { name: 'Fantastical', icon: <BsCalendarDate size={32} />, color: 'from-red-400 to-red-600', position: 'top-[12%] right-[10%]' },
    { name: 'Xcode', icon: <SiXcode size={32} />, color: 'from-sky-400 to-sky-600', position: 'top-[30%] left-[5%]' },
    { name: 'GitHub', icon: <FaGithub size={32} />, color: 'from-gray-700 to-gray-900', position: 'top-[40%] right-[5%]' },
    { name: 'X', icon: <FaXTwitter size={32} />, color: 'from-gray-800 to-black', position: 'top-[25%] right-[40%]' },
    { name: 'VS Code', icon: <BiLogoVisualStudio size={32} />, color: 'from-blue-500 to-blue-800', position: 'top-[55%] left-[10%]' },
    { name: 'Notion', icon: <SiNotion size={32} />, color: 'from-gray-200 to-gray-400', position: 'top-[70%] right-[25%]' },
    { name: 'Discord', icon: <FaDiscord size={32} />, color: 'from-indigo-500 to-indigo-700', position: 'top-[55%] left-[55%]' },
    { name: 'Spotify', icon: <FaSpotify size={32} />, color: 'from-green-400 to-green-600', position: 'top-[80%] left-[35%]' },
    { name: 'Slack', icon: <FaSlack size={32} />, color: 'from-pink-500 to-purple-600', position: 'top-[65%] right-[10%]' },
    { name: 'Chrome', icon: <FaChrome size={32} />, color: 'from-blue-500 via-red-500 to-yellow-400', position: 'top-[50%] right-[15%]' }, // cor do Google atualizada
    { name: 'Photoshop', icon: <SiAdobephotoshop size={32} />, color: 'from-blue-500 to-blue-900', position: 'top-[15%] left-[65%]' },
    { name: 'After Effects', icon: <SiAdobeaftereffects size={32} />, color: 'from-purple-600 to-purple-900', position: 'top-[35%] right-[60%]' },
    { name: 'Steam', icon: <FaSteam size={32} />, color: 'from-gray-600 to-blue-900', position: 'top-[75%] left-[5%]' },
    { name: 'YouTube', icon: <FaYoutube size={32} />, color: 'from-red-500 to-red-700', position: 'top-[85%] right-[10%]' },
  ];



  return (
    <section id="sobre" className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.01)_50%,transparent_51%)] bg-[length:100px_100px]" />

      {/* Ícones de apps flutuantes */}
      <div className="absolute inset-0 hidden sm:inline pointer-events-none">
        {apps.map((app, index) => (
          <div
            key={app.name}
            className={`absolute w-16 h-16 ${app.position} transform transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0 rotate-0' 
                : 'opacity-0 translate-y-10 rotate-45'
            }`}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
              animationDelay: `${index * 0.2}s`
            }}
          >
            <div className={`w-full h-full bg-gradient-to-br ${app.color} rounded-2xl shadow-lg flex items-center justify-center text-white font-bold text-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden`}>
              
              {/* Conteúdo do ícone */}
              <span className="relative z-10 drop-shadow-lg">
                {app.icon}
              </span>
              
              {/* Reflexo sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 rounded-2xl" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Texto central */}
      <div className={`text-center z-10 px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-4xl md:text-7xl font-black leading-tight mb-8 relative">
          <span className="block text-white">
            JUNTOS
          </span>
          <span className="block text-gray-200">
            MELHORAMOS O
          </span>
          <span className="block text-white">
            SEU NEGÓCIO
          </span>
        </h2>
        
        {/* Botão Nossos Projetos */}
        <div className="mt-16">
          <button 
            onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative border-2 border-gray-600 rounded-full px-10 py-4 text-gray-400 hover:text-white hover:border-white transition-all duration-300 flex items-center space-x-4 mx-auto"
          >
            <span className="relative z-10 font-medium">Nossos Projetos</span>
            
            {/* Seta animada */}
            <div className="relative z-10 w-6 h-6 overflow-hidden">
              <div className="w-4 h-4 border-r-2 border-t-2 border-current transform rotate-45 transition-all duration-300 group-hover:translate-x-1" />
            </div>
          </button>
        </div>
      </div>

      {/* Partículas de código flutuantes */}
      <div className="absolute inset-0 pointer-events-none">
        {['<>', '{}', '[]'].map((symbol, i) => (
          <div
            key={symbol}
            className="absolute text-gray-500/10 font-mono text-xl"
            style={{
              left: `${20 + (i * 20)}%`,
              top: `${30 + (i * 15)}%`,
              animation: `float ${6 + (i % 2)}s ease-in-out infinite`,
              animationDelay: `${i * 1}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>
    </section>
  );
};