import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster';
import Seo from '@/components/Seo';
import TechnologyShowcase from '@/components/TechnologyShowcase';
import { fullStackTechnologies } from '@/data/technologies';

const FullStackPage = () => (
  <>
    <Seo
      title="Samuel Santana | Desenvolvedor Full-Stack"
      description="Portfólio de Samuel Santana, desenvolvedor Full-Stack especializado em React, Node.js, TypeScript, integrações e automações."
      path="/samuel-full-stack"
      service={{ name: 'Desenvolvimento Full-Stack', type: 'Desenvolvimento de aplicações web e integrações' }}
    />
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechnologyShowcase
          technologies={fullStackTechnologies}
          subtitle="Stack full-stack para construir produtos modernos, integrações confiáveis e soluções escaláveis."
        />
        <Contact />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  </>
);

export default FullStackPage;
