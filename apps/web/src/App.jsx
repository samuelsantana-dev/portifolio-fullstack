import React from 'react';
import { Helmet } from 'react-helmet';
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
import LinksPage from '@/pages/LinksPage';
import FreelancerPage from '@/pages/FreelancerPage';
import AiConsultingPage from '@/pages/AiConsultingPage';
import { siteRoutes } from '@/data/routes';
import TechnologyShowcase from '@/components/TechnologyShowcase';
import { fullStackTechnologies } from '@/data/technologies';

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  if (pathname === siteRoutes.links || pathname === '/links') {
    return <LinksPage />;
  }

  if (pathname === siteRoutes.freelancer) {
    return <FreelancerPage />;
  }

  if (pathname === siteRoutes.aiConsulting) {
    return <AiConsultingPage />;
  }

  if (pathname !== siteRoutes.fullStack) {
    return <LinksPage />;
  }

  return (
    <>
      <Helmet>
        <title>Samuel Santana - Full-Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio of Samuel Santana, a Full-Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. View my projects, experience, and skills." />
      </Helmet>
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
}

export default App;
