import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { profile } from '@/data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-blue-500/20 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <span>© {currentYear} {profile.name}. Desenvolvido com</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>e React</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            {profile.role} | React • Node.js • TypeScript
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
