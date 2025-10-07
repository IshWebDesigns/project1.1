import React, { useEffect, useState } from 'react';
import DarkVeil from './DarkVeil';

export const HeroSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Novo fundo DarkVeil */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
        <DarkVeil />
      </div>

      {/* Overlay leve para suavizar o fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black/30 to-gray-900/40" />

      {/* Conteúdo principal */}
      <div
        className={`text-center mb-16 transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex items-center justify-center space-x-6 mb-16 group">
          {/* Barras de áudio esquerda */}
          
            <div className="flex items-center justify-center space-x-6 group">
            {/* Barras de áudio esquerda */}
            <div className="flex flex-col justify-center items-end space-y-2 transform group-hover:scale-110 transition-transform duration-300 relative top-1">
              {[6, 10, 4, 12, 8].map((width, i) => (
                <div
                  key={i}
                  className="h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"
                  style={{
                    width: `${width * 6}px`,
                  }}
                />
              ))}
            </div>

            {/* Logo ISH */}
            <div className="relative flex items-center">
              <h1 className="text-8xl md:text-9xl font-bold tracking-wider bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500 leading-none">
                ish.web
              </h1>
            </div>

            {/* Barras de áudio direita */}
            <div className="flex flex-col justify-center items-start space-y-2 transform group-hover:scale-110 transition-transform duration-300 relative top-1">
              {[6, 10, 4, 12, 8].map((width, i) => (
                <div
                  key={i}
                  className="h-2 bg-gradient-to-l from-gray-400 to-gray-600 rounded-full"
                  style={{
                    width: `${width * 6}px`,
                  }}
                />
              ))}
            </div>
          </div>


          
        </div>

        {/* Tagline */}

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl text-gray-300 leading-relaxed font-light">
            <span className="text-white font-semibold">Criamos websites modernos e</span>
            <br />
            <span className="text-gray-200 font-semibold">profissionais para o seu negócio</span>
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

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};
