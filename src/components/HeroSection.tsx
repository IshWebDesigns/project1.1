import React, { useEffect, useState } from 'react';

export const HeroSection = (): JSX.Element => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center">
      {/* Subtle neutral background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-gray-800/5 to-gray-900/10" />
      
      {/* Minimal floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gray-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      

      {/* Logo principal com efeitos incríveis */}
      <div className={`text-center mb-16 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center justify-center space-x-6 mb-16 group">
          {/* Barras de áudio esquerda */}
          <div className="flex items-end space-x-2 transform group-hover:scale-110 transition-transform duration-300">
            {[8, 12, 6, 10, 4].map((height, i) => (
              <div
                key={i}
                className="w-2 bg-gradient-to-t from-gray-600 to-gray-400 rounded-full"
                style={{ 
                  height: `${height * 4}px`,
                }}
              />
            ))}
          </div>
          
          {/* Logo ISH */}
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-bold tracking-wider bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500">
              ish
            </h1>
          </div>
          
          {/* Barras de áudio direita */}
          <div className="flex items-end space-x-2 transform group-hover:scale-110 transition-transform duration-300">
            {[6, 10, 4, 12, 8].map((height, i) => (
              <div
                key={i}
                className="w-2 bg-gradient-to-t from-gray-600 to-gray-400 rounded-full"
                style={{ 
                  height: `${height * 4}px`,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Tagline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl text-gray-300 leading-relaxed font-light">
            <span className="text-white font-semibold">
              Criamos websites modernos e
            </span>
            <br />
            <span className="text-gray-200 font-semibold">
              profissionais para o seu negócio
            </span>
          </h2>
        </div>

        {/* Botão CTA */}
        <div className="mt-12">
          <button 
            onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gray-100"
          >
            <span className="relative z-10">Ver Nosso Trabalho</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};