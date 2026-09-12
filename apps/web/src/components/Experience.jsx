import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Desenvolvedor Full-Stack e Automações',
      company: 'Clivy Company',
      period: 'Janeiro 2026 - Junho 2026',
      location: 'Remoto',
      description: 'Desenvolvimento de aplicações full-stack e automações, com integração de APIs, modelagem de dados, autenticação, observabilidade e colaboração com times multidisciplinares em rituais ágeis.',
      technologies: ['React', 'Next.js', 'React Hook Form', 'Redux', 'Jotai',  'Chakra UI', 'Prisma', 'NestJS', 'Node.js', 'Express.js', 'Sequelize', 'gRPC', 'PHP', 'Swagger', 'OpenAPI', 'Sockets', 'n8n', 'AWS']
    },
    {
      title: 'Desenvolvedor Full-Stack',
      company: 'Start Tecnologia',
      period: 'Abril 2025 - Julho 2025',
      location: 'Remoto',
      description: 'Desenvolvimento de aplicações web modernas utilizando React, Next.js e TypeScript. Implementação de interfaces responsivas, integração com APIs RESTful, e otimização de performance.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Figma', 'Redux Toolkit', 'Framer Motion']
    },
    {
      title: 'Desenvolvedor Full-Stack',
      company: 'Cogno Tech',
      period: 'Fevereiro 2025 - Maio 2025',
      location: 'Remoto',
      description: 'Desenvolvimento com React e gerenciamento de estado com React Query e Redux Toolkit. Implementação de design system, componentes reutilizáveis, testes unitários e integrações com APIs.',
      technologies: ['React', 'Next.js', 'Redux Toolkit', 'Zustand', 'Styled Components', 'Storybook', 'Webpack']
    },
    {
      title: 'Desenvolvedor Full-Stack',
      company: 'Lusa Tecnologias',
      period: 'Junho 2024 - Março 2025',
      location: 'Remoto',
      description: 'Desenvolvimento de aplicações com React 19 e TypeScript. Implementação de arquitetura Clean Code, padrões de design, bibliotecas internas, testes automatizados e documentação técnica.',
      technologies: ['React 19', 'TypeScript', 'Next.js', 'Shopify Liquid', 'Design System', 'Testing Library', 'GitHub Actions']
    },
    {
      title: 'Desenvolvedor Full-Stack',
      company: 'Pipe Tech',
      period: 'Janeiro 2024 - Janeiro 2025',
      location: 'Remoto',
      description: 'Integração de APIs RESTful e GraphQL, desenvolvimento de interfaces com React, implementação de autenticação JWT/OIDC, e criação de sistemas escaláveis com Node.js.',
      technologies: ['React', 'Node.js', 'GraphQL', 'JWT', 'Azure DevOps', 'WordPress', 'MongoDB']
    },
    {
      title: 'Desenvolvedor Full-Stack',
      company: 'Autônomo',
      period: 'Janeiro 2023 - Janeiro 2024',
      location: 'Remoto',
      description: 'Desenvolvimento de soluções personalizadas com TypeScript, Node.js e MongoDB. Criação de interfaces responsivas, APIs escaláveis, arquitetura limpa e testes automatizados.',
      technologies: ['TypeScript', 'Node.js', 'MongoDB', 'React', 'Chakra UI', 'Jest', 'E2E Tests']
    },
    {
      title: 'Desenvolvedor Full-Stack',
      company: 'Tech World',
      period: 'Janeiro 2022 - Janeiro 2023',
      location: 'Remoto',
      description: 'Desenvolvimento com ReactJS, gerenciamento de estado, componentização avançada, integração com APIs, otimização de performance, testes automatizados e metodologias ágeis.',
      technologies: ['React', 'Tailwind CSS', 'Redux', 'Git', 'MongoDB', 'SQL Server', 'Scrum']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experiência Profissional
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Minha trajetória profissional construindo soluções web modernas e escaláveis
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-500/30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10" />

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-slate-800 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`p-2 bg-blue-500/10 rounded-lg ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                        <Briefcase className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-semibold mb-2">{exp.company}</p>
                        <div className={`flex items-center gap-2 text-gray-400 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                          <span className="mx-2">•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-900 text-blue-400 text-xs rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
