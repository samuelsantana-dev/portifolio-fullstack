import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';
const Hero = () => {
  const socialLinks = [{
    icon: Github,
    href: profile.links.github,
    label: 'GitHub'
  }, {
    icon: Linkedin,
    href: profile.links.linkedin,
    label: 'LinkedIn'
  }, {
    icon: BookOpen,
    href: profile.links.blog,
    label: 'Blog de tecnologia'
  }, {
    icon: Mail,
    href: `mailto:${profile.email}`,
    label: 'Email'
  }];
  return <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.5, 0.3, 0.5]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Professional Profile Photo */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} className="relative">
            <motion.div whileHover={{
            scale: 1.05
          }} transition={{
            duration: 0.3
          }}>
              <img src={profile.photoUrl} alt={`${profile.name} - foto profissional`} className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-blue-500/50" />
            </motion.div>
            
            {/* Floating ring animation */}
            <motion.div className="absolute inset-0 rounded-full border-2 border-blue-400/30" animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0, 0.5]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }} />
          </motion.div>

          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="space-y-6 max-w-4xl">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }}>
              <p className="text-blue-400 text-lg font-medium mb-2">Olá! 👋 Eu sou</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                {profile.name}
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 font-semibold">
                {profile.primaryRole}
              </p>
            </motion.div>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Especializado em React, Node.js, TypeScript e APIs RESTful. 
              Apaixonado por criar experiências web modernas e escaláveis.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => {
              const element = document.querySelector('#projects');
              element?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                Ver Projetos
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10" onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                Entrar em Contato
              </Button>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8
          }} className="flex gap-4 pt-4 justify-center">
              {socialLinks.map((link, index) => <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-blue-600 rounded-lg transition-all duration-300" whileHover={{
              scale: 1.1,
              rotate: 5
            }} whileTap={{
              scale: 0.95
            }} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.8 + index * 0.1
            }} aria-label={link.label}>
                  <link.icon className="w-6 h-6 text-white" />
                </motion.a>)}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;
