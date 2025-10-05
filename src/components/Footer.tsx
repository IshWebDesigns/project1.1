import React from 'react';

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo grande */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-6xl md:text-8xl font-bold text-white">ish</h2>
          </div>
          
          {/* Links */}
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
            <div>
              <h3 className="text-white font-bold mb-4">Páginas</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#projetos" className="hover:text-white transition-colors">Projetos</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                
                <li><a href="#contato" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Sociais</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Threads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Figma</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mail</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 DVGD All Rights Reserved.</p>
          <p>made by ish</p>
        </div>
      </div>
    </footer>
  );
};