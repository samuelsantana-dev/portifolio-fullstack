import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Github, Instagram, Link, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });


  const socialLinks = [
    {
      icon: BookOpen,
      name: 'Blog de tecnologia',
      link: 'https://tech.mundosucesso.com/',
      color: 'hover:text-cyan-300'
    },
    {
      icon: Link,
      name: 'Portfólio',
      link: 'https://samuel-fullstack.mundosucesso.com/',
      color: 'hover:text-blue-300'
    },
    {
      icon: Github,
      name: 'GitHub',
      link: 'https://github.com/samuelsantana-dev',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/samuelsantana-dev',
      color: 'hover:text-blue-600'
    },
    {
      icon: Link,
      name: 'Links profissionais',
      link: 'https://samuelsantana-dev.mundosucesso.com/',
      color: 'hover:text-violet-300'
    },
    {
      icon: Instagram,
      name: 'Instagram profissional',
      link: 'https://www.instagram.com/samuel.desenvolvedor/',
      color: 'hover:text-pink-400'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      link: 'https://www.youtube.com/@Samuel.desenvolvedorjs',
      color: 'hover:text-red-400'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Feature em Desenvolvimento",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Conteúdo e Redes Profissionais</h3>
              <p className="text-gray-400 mb-4">
                Acompanhe meus conteúdos técnicos, projetos e canais profissionais.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-slate-800 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-2">Disponível para Projetos</h3>
              <p className="text-gray-400">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades 
                de fazer parte da sua visão.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
