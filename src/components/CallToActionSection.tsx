import React from 'react';

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Título principal */}
        <h2 className="text-4xl md:text-6xl font-black leading-tight mb-12">
          <span className="block mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-100">
            CRIAR UM WEBSITE É MAIS DO
          </span>
          <span className="block mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-100">
            QUE ESTAR ONLINE!
          </span>
        </h2>

        {/* Texto secundário */}
        <div className="text-xl md:text-3xl font-semibold text-gray-400 leading-relaxed tracking-wide mb-16">
          <p>É CONSTRUIR UMA PRESENÇA DIGITAL QUE TRANSMITE CONFIANÇA,</p>
          <p>GERA OPORTUNIDADES E FAZ CRESCER O SEU NEGÓCIO.</p>
        </div>
      </div>
    </section>
  );
};
  