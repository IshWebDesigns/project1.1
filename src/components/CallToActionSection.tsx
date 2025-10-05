import React from 'react';

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black leading-tight mb-16">
          <span className="block mb-4">CRIAR UM WEBSITE É MAIS DO</span>
          <span className="block mb-8">QUE ESTAR ONLINE !</span>
        </h2>
        
        <div className="text-2xl md:text-4xl font-black leading-tight text-gray-300">
          <p className="mb-2">É CONSTRUIR UMA PRESENÇA</p>
          <p className="mb-2">DIGITAL QUE TRANSMITE</p>
          <p className="mb-2">CONFIANÇA, GERA</p>
          <p className="mb-2">OPORTUNIDADES E FAZ</p>
          <p>CRESCER O SEU NEGÓCIO.</p>
        </div>
      </div>
    </section>
  );
};