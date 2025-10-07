import React from 'react';

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-black text-white py-12 md:py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo grande */}
          <div className="mb-10 md:mb-0">
            <h2 className="text-5xl md:text-8xl font-bold text-white">ish.web</h2>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 md:flex md:flex-row md:space-x-16 w-full md:w-auto">
            <div>
              <h3 className="text-white font-bold mb-4 text-sm md:text-base">Páginas</h3>
              <ul className="space-y-2 md:space-y-3 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#projetos" className="hover:text-white transition-colors">Projetos</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 text-sm md:text-base">Sociais</h3>
              <ul className="space-y-2 md:space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Threads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mail</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center md:items-center text-xs md:text-sm text-gray-500 space-y-3 md:space-y-0">
          <p>© 2025 DVGD All Rights Reserved.</p>
          <p>made by ish.web</p>
        </div>
      </div>
    </footer>
  );
};