import React from 'react';
import AiConsultingContent from '@/components/consulting/AiConsultingContent';
import Seo from '@/components/Seo';

const AiConsultingPage = () => (
  <>
    <Seo
      title="Consultoria em IA e Tecnologia | Samuel Santana"
      description="Consultoria em inteligência artificial, automações e tecnologia para transformar processos em resultados mensuráveis."
      path="/consulting-software-ia"
      service={{ name: 'Consultoria em IA e tecnologia', type: 'Consultoria em inteligência artificial, automação de processos e desenvolvimento de software' }}
    />
    <AiConsultingContent />
  </>
);

export default AiConsultingPage;
