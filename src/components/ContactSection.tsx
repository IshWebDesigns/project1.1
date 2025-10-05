import React, { useState, useEffect } from 'react';
import { Mail, User, MessageSquare, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const ContactSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    assunto: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contato');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Efeito de digitação no terminal
  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCurrentLine(prev => prev < 4 ? prev + 1 : prev);
      }, 500);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({ email: '', nome: '', assunto: '', mensagem: '' });
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-300' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
  ];

  return (
    <section id="contato" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Título */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Entrar em Contacto
          </h2>
          <p className="text-xl text-gray-400">
            Pronto para transformar a sua ideia em realidade digital?
          </p>
        </div>

        {/* Terminal de contato */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
            {/* Header do terminal */}
            <div className="bg-gray-800/90 px-6 py-4 flex items-center space-x-3 border-b border-gray-700/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono ml-4 flex items-center space-x-2">
                <span>Nova Mensagem</span>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
            
            {/* Conteúdo do formulário */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6 font-mono">
              {/* Email */}
              <div className={`flex items-center space-x-4 transition-all duration-500 ${
                currentLine >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                <span className="text-gray-400 text-sm w-16 flex-shrink-0">Email:</span>
                <div className="flex-1 relative group">
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none border-b border-gray-700 focus:border-gray-400 pb-2 transition-all duration-300 group-hover:border-gray-500"
                    required
                  />
                  <Mail className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-gray-400 transition-colors duration-300" />
                </div>
              </div>

              {/* Nome */}
              <div className={`flex items-center space-x-4 transition-all duration-500 delay-200 ${
                currentLine >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                <span className="text-gray-400 text-sm w-16 flex-shrink-0">Nome:</span>
                <div className="flex-1 relative group">
                  <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none border-b border-gray-700 focus:border-gray-400 pb-2 transition-all duration-300 group-hover:border-gray-500"
                    required
                  />
                  <User className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-gray-400 transition-colors duration-300" />
                </div>
              </div>

              {/* Assunto */}
              <div className={`flex items-center space-x-4 transition-all duration-500 delay-400 ${
                currentLine >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                <span className="text-gray-400 text-sm w-16 flex-shrink-0">Assunto:</span>
                <div className="flex-1 relative group">
                  <input
                    type="text"
                    name="assunto"
                    placeholder="Assunto da mensagem"
                    value={formData.assunto}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none border-b border-gray-700 focus:border-gray-400 pb-2 transition-all duration-300 group-hover:border-gray-500"
                    required
                  />
                  <MessageSquare className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-gray-400 transition-colors duration-300" />
                </div>
              </div>

              {/* Mensagem */}
              <div className={`pt-4 transition-all duration-500 delay-600 ${
                currentLine >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                <div className="relative group">
                  <textarea
                    name="mensagem"
                    placeholder="$ Escreva a sua mensagem aqui..."
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none resize-none border border-gray-700 focus:border-gray-400 rounded-lg p-4 transition-all duration-300 group-hover:border-gray-500"
                    required
                  />
                  <div className="absolute bottom-4 right-4 text-gray-500 group-focus-within:text-gray-400 transition-colors duration-300">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Botão de envio */}
              <div className="pt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-8 py-3 bg-white text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar</span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Ícones sociais */}
        <div className={`flex justify-center space-x-8 mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              className="group relative w-16 h-16 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              
              {/* Efeito de onda no hover */}
              <div className="absolute inset-0 rounded-full bg-white/5 transform scale-0 group-hover:scale-100 transition-transform duration-500" />
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {social.label}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};