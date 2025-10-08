import React, { useState, useEffect } from 'react';

export const ProjectsSection = (): JSX.Element => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projetos');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    { 
      id: 1, 
      title: 'Globalead.pt',
      description: 'WebSite de Imobiliaria',
      tech: ['React-ts', 'Supabase'],
      image: '/globalead.png'
    },
    { 
      id: 2, 
      title: 'PROJETO 2',
      description: 'Dashboard Analytics',
      tech: ['Vue.js', 'Python', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    { 
      id: 3, 
      title: 'PROJETO 3',
      description: 'App Mobile Híbrido',
      tech: ['React Native', 'Firebase'],
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    { 
      id: 4, 
      title: 'PROJETO 4',
      description: 'Plataforma SaaS',
      tech: ['Next.js', 'Stripe', 'Supabase'],
      image: 'https://images.pexels.com/photos/2029734/pexels-photo-2029734.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    { 
      id: 5, 
      title: 'PROJETO 5',
      description: 'Site Corporativo',
      tech: ['WordPress', 'PHP', 'MySQL'],
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    { 
      id: 6, 
      title: 'PROJETO 6',
      description: 'Marketplace Digital',
      tech: ['Angular', 'Express', 'Redis'],
      image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ];

  return (
    <section id="projetos" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Título da seção */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            NOSSOS PROJETOS
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cada projeto é criado com atenção aos detalhes e tecnologia moderna
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 border border-gray-800/50 group-hover:border-gray-600/50">
                
                {/* Imagem do projeto */}
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay com informações */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="text-lg font-bold text-white mb-2">{project.description}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-600/80 text-white text-sm rounded-full backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Botão de visualização */}
                  <div className={`absolute top-6 right-6 transition-all duration-500 ${
                    hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Informações do projeto */}
                <div className="p-8">
                  <h3 className="text-lg font-bold text-white cursor-pointer hover:underline tracking-wider mb-2 group-hover:text-gray-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="group relative px-12 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:bg-gray-100">
            <span className="relative z-10">Ver Todos os Projetos</span>
          </button>
        </div>
      </div>
    </section>
  );
};