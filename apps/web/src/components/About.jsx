import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Award, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const About = () => {
  const { toast } = useToast();

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Código limpo, escalável e bem documentado seguindo as melhores práticas'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Foco em otimização e performance em todas as aplicações'
    },
    {
      icon: Users,
      title: 'Trabalho em Equipe',
      description: 'Excelente comunicação e colaboração em ambientes ágeis'
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Comprometimento com excelência e entrega de valor'
    }
  ];

  const handleDownloadResume = () => {
    // Create a simple PDF content using data URL
    const pdfContent = `
      SAMUEL SANTANA
      Desenvolvedor Full-Stack
      
      Email: samuelsantanadasilva8@gmail.com
      Telefone: (61) 9 91076831
      LinkedIn: linkedin.com/in/samuel-santana
      GitHub: github.com/Samuel Santana
      
      RESUMO PROFISSIONAL
      Desenvolvedor Full-Stack com experiência sólida em JavaScript, TypeScript, React e Node.js.
      Especializado em criar soluções web modernas e escaláveis.
      
      TECNOLOGIAS
      - Frontend: React, Next.js, TypeScript, Tailwind CSS
      - Backend: Node.js, Express, APIs RESTful, GraphQL
      - Databases: MongoDB, PostgreSQL, MySQL
      - Cloud & DevOps: AWS, GCP, Docker, CI/CD
    `;

    // Create a Blob with plain text (for demonstration)
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Samuel_Santana_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    toast({
      title: "✅ Download Iniciado",
      description: "Seu currículo está sendo baixado!"
    });
  };

  return (
    <section id="about" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://horizons-cdn.hostinger.com/30b03925-8471-4619-bbee-4151bd9e49fc/c03e5fa149e28b3665deb6eeeb53fc4d.png"
              alt="Samuel Santana working on code"
              className="rounded-2xl shadow-2xl border-2 border-blue-500/30"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Olá! Sou Samuel Santana, Desenvolvedor Full-Stack com experiência sólida em 
              <span className="text-blue-400 font-semibold"> JavaScript, TypeScript, React e Node.js</span>. 
              Tenho atuado em projetos com integração de APIs, automação de processos, microsserviços e CI/CD.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Minha experiência inclui trabalho com <span className="text-blue-400 font-semibold">Docker, PostgreSQL, 
              MongoDB, AWS, GCP e Vercel</span>. Busco constantemente aprimorar minhas habilidades técnicas e 
              contribuir em projetos desafiadores que geram impacto real.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Formado em <span className="text-blue-400 font-semibold">Análise e Desenvolvimento de Sistemas</span> pela 
              Universidade Anhanguera (2021-2023), atualmente estou aprimorando meu inglês técnico através de curso 
              em vídeo.
            </p>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white group"
                onClick={handleDownloadResume}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Baixar Currículo
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl"
        >
          <h3 className="mb-4 text-center text-2xl font-bold text-white">Vídeo em Destaque</h3>
          <div className="aspect-video overflow-hidden rounded-xl border border-blue-500/20 bg-slate-800 shadow-lg">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bWXkYLIndQo?si=8HiH6WYXtYHFa6Kw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </motion.div>

S        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-800 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
            >
              <item.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
