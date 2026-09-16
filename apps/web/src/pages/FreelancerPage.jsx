import React from 'react';
import FreelancerContent from '@/components/freelancer/FreelancerContent';
import Seo from '@/components/Seo';

const FreelancerPage = () => (
  <>
    <Seo
      title="Desenvolvedor Freelancer | Sites, Sistemas e Automações | Samuel Santana"
      description="Desenvolvimento freelancer de sites, aplicações web, sistemas, integrações e automações sob medida para o seu negócio."
      path="/developer"
      service={{ name: 'Desenvolvimento de software freelancer', type: 'Desenvolvimento de sites, sistemas web, integrações e automações' }}
    />
    <FreelancerContent />
  </>
);

export default FreelancerPage;
