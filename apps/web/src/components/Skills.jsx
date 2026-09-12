import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Wrench, GitBranch, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: [
        'React 19',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'Styled Components',
        'Framer Motion',
        'Redux Toolkit',
        'React Query',
        'Vite',
        'Webpack'
      ]
    },
    {
      icon: Database,
      title: 'Backend & Databases',
      skills: [
        'Node.js',
        'Express',
        'APIs RESTful',
        'GraphQL',
        'MongoDB',
        'PostgreSQL',
        'MySQL',
        'Prisma',
        'TypeORM',
        'Supabase',
        'Firebase'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        'AWS (GCP, Vercel)',
        'Docker',
        'Kubernetes',
        'CI/CD',
        'GitHub Actions',
        'Vercel',
        'Azure DevOps'
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Libraries',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Postman',
        'Swagger',
        'Jest',
        'Testing Library',
        'Storybook',
        'Figma'
      ]
    },
    {
      icon: GitBranch,
      title: 'Methodologies',
      skills: [
        'Agile (Scrum, Kanban)',
        'Clean Code',
        'SOLID',
        'Design Patterns',
        'Micro-frontends',
        'Monorepo (Nx/Turborepo)'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Auth',
      skills: [
        'JWT',
        'OAuth 2.0',
        'SSO',
        'API Security',
        'CORS',
        'HTTPS/SSL'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Habilidades & Tecnologias
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ferramentas e tecnologias que domino para criar soluções completas e eficientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-slate-900 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.02) }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 bg-slate-800 text-gray-300 text-sm rounded-lg border border-slate-700 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;