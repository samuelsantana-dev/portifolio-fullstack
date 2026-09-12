import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Projects = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de e-commerce com carrinho de compras, sistema de pagamento, gerenciamento de produtos e painel administrativo.',
      image: 'Modern e-commerce website with shopping cart and product displays',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management Dashboard',
      description: 'Dashboard para gerenciamento de tarefas e projetos com drag-and-drop, filtros avançados, notificações em tempo real e colaboração em equipe.',
      image: 'Professional project management dashboard with kanban board',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Aplicação de chat em tempo real com suporte para mensagens privadas, grupos, compartilhamento de arquivos e notificações push.',
      image: 'Modern chat application interface with message bubbles',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Weather Forecast App',
      description: 'Aplicação de previsão do tempo com mapas interativos, previsão de 7 dias, alertas meteorológicos e geolocalização.',
      image: 'Beautiful weather app showing forecast and maps',
      technologies: ['React', 'OpenWeather API', 'Leaflet', 'Chart.js'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'Plataforma de análise de métricas de redes sociais com gráficos interativos, relatórios personalizados e integração com múltiplas APIs.',
      image: 'Analytics dashboard with graphs and social media metrics',
      technologies: ['Next.js', 'D3.js', 'GraphQL', 'PostgreSQL', 'Docker'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Fitness Tracking App',
      description: 'Aplicativo para rastreamento de exercícios, nutrição, progresso de metas e planos de treino personalizados.',
      image: 'Fitness app with workout tracking and progress charts',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      github: '#',
      demo: '#'
    }
  ];

  const handleLinkClick = (e, type) => {
    e.preventDefault();
    toast({
      title: "🚧 Feature em Desenvolvimento",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="projects" className="py-20 px-4 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projetos em Destaque
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi utilizando as mais modernas tecnologias
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900 rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                  alt={`${project.title} screenshot`}
                 src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-800 text-blue-400 text-xs rounded-md border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                    onClick={(e) => handleLinkClick(e, 'github')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={(e) => handleLinkClick(e, 'demo')}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
            onClick={(e) => handleLinkClick(e, 'more')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Ver Mais Projetos no GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;