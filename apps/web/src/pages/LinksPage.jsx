import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Facebook, Github, Instagram, Linkedin, MessageCircle, Youtube } from 'lucide-react';
import ProfileIdentity from '@/components/ProfileIdentity';
import { getWhatsAppUrl, profile } from '@/data/profile';
import { siteRoutes } from '@/data/routes';

const LinksPage = () => {
  const socialLinks = [
    { icon: Facebook, label: 'Links gerais', href: profile.links.general },
    { icon: Instagram, label: 'Instagram profissional', href: profile.links.instagram },
    { icon: Linkedin, label: 'LinkedIn', href: profile.links.linkedin },
    { icon: MessageCircle, label: 'WhatsApp', href: getWhatsAppUrl('Olá, Samuel! Gostaria de conversar.') },
  ];

  const profileLinks = [
    { label: 'Portfólio Full-Stack', href: siteRoutes.fullStack, internal: true, icon: Github },
    { label: 'Portfólio Freelancer', href: siteRoutes.freelancer, internal: true },
    { label: 'Consultoria em IA e Tecnologia', href: siteRoutes.aiConsulting, internal: true },
    { label: 'Mundo de Sucesso: Consultoria e Desenvolvimento', href: profile.links.blog, icon: BookOpen },
    { label: 'Canal no YouTube', href: profile.links.youtube, icon: Youtube },
  ];

  return (
    <>
      <Helmet>
        <title>Samuel Santana | Links Profissionais</title>
        <meta name="description" content="Links profissionais, conteúdos e projetos de Samuel Santana." />
      </Helmet>

      <main className="min-h-screen bg-[#e9faff] px-4 py-14 text-[#142956] sm:py-20">
        <div className="mx-auto flex w-full max-w-sm flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <ProfileIdentity featured showEducation />
          </motion.div>

          <div className="mt-10 flex items-center justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-[#142956] transition-transform hover:scale-110 hover:text-blue-600"
              >
                <social.icon className="h-7 w-7" />
              </a>
            ))}
          </div>

          <div className="mt-10 flex w-full flex-col gap-5">
            {profileLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.internal ? undefined : '_blank'}
                rel={link.internal ? undefined : 'noopener noreferrer'}
                className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#4b7ff0] px-6 py-4 text-center text-base font-bold leading-tight text-white shadow-sm transition-colors hover:bg-[#386ee3]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 + index * 0.07 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.icon && <link.icon className="h-5 w-5 shrink-0" />}
                <span>{link.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default LinksPage;
