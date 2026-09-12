import React from 'react';
import { Helmet } from 'react-helmet';
import { BarChart3, Bot, Brain, Cloud, Code2, Network, Shield } from 'lucide-react';
import ProfessionalPage from '@/components/ProfessionalPage';

const AiConsultingPage = () => (
  <>
    <Helmet>
      <title>Samuel Santana | Consultoria em IA e Tecnologia</title>
      <meta name="description" content="Consultoria em inteligência artificial, automações, desenvolvimento de software e tecnologia." />
    </Helmet>
    <ProfessionalPage
      eyebrow="Consultoria em IA e Tecnologia"
      title="IA, software e automações aplicados ao seu negócio"
      description="Ajudo empresas e profissionais a transformar desafios operacionais em soluções tecnológicas. A consultoria une inteligência artificial, automações e desenvolvimento de software com foco em ganho de produtividade e decisões mais eficientes."
      heroIcon={Brain}
      services={[
        { icon: Bot, title: 'Automações com IA', description: 'Mapeamento e automação de tarefas repetitivas para liberar tempo do time e padronizar processos.' },
        { icon: Code2, title: 'Desenvolvimento de software', description: 'Planejamento e construção de aplicações, APIs e ferramentas internas alinhadas à operação.' },
        { icon: Network, title: 'Integrações inteligentes', description: 'Conexão entre sistemas, APIs e fluxos de trabalho para criar processos mais fluidos.' },
        { icon: BarChart3, title: 'Dados e observabilidade', description: 'Estruturação de indicadores, dados e monitoramento para apoiar decisões de negócio.' },
        { icon: Cloud, title: 'Arquitetura e cloud', description: 'Orientação técnica para soluções escaláveis, seguras e adequadas ao estágio do projeto.' },
        { icon: Shield, title: 'Segurança e governança', description: 'Boas práticas de autenticação, privacidade e organização para uso responsável da tecnologia.' },
      ]}
      skills={[
        { title: 'IA e automação', items: ['Automação de processos', 'n8n', 'Integração de APIs', 'Webhooks', 'Prompts', 'Fluxos inteligentes'] },
        { title: 'Desenvolvimento', items: ['React', 'Next.js', 'Node.js', 'NestJS', 'TypeScript', 'PHP'] },
        { title: 'Dados', items: ['BigQuery', 'PostgreSQL', 'MongoDB', 'Prisma', 'Modelagem de dados', 'Observabilidade'] },
        { title: 'Arquitetura', items: ['Microserviços', 'Docker', 'Kubernetes', 'RabbitMQ', 'gRPC', 'CI/CD'] },
        { title: 'Segurança', items: ['JWT', 'OAuth 2.0', 'LGPD', 'OpenAPI', 'API Security', 'Autenticação'] },
        { title: 'Gestão técnica', items: ['Scrum', 'Kanban', 'Jira', 'Planejamento de sprint', 'Documentação', 'Mentoria'] },
      ]}
      steps={[
        { title: 'Diagnóstico', description: 'Analisamos o processo atual, os gargalos e a oportunidade de aplicação da tecnologia.' },
        { title: 'Estratégia', description: 'Definimos prioridades, escopo e um plano viável para a solução gerar impacto.' },
        { title: 'Implementação', description: 'Acompanho a construção, integração ou evolução da solução com visão técnica e de negócio.' },
      ]}
      ctaTitle="Quer aplicar IA e tecnologia de forma prática?"
      ctaDescription="Converse comigo para identificar oportunidades de automação, melhoria de processos e desenvolvimento de novas soluções."
      ctaMessage="Olá, Samuel! Gostaria de conversar sobre consultoria em IA e tecnologia."
    />
  </>
);

export default AiConsultingPage;
