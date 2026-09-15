import React from 'react';
import { Briefcase, Code2, Database, Layout, Plug, Rocket, Workflow } from 'lucide-react';
import ProfessionalPage from '@/components/ProfessionalPage';
import Seo from '@/components/Seo';
import { freelancerTechnologies } from '@/data/technologies';

const FreelancerPage = () => (
  <>
    <Seo
      title="Desenvolvedor Freelancer | Sites, Sistemas e Automações | Samuel Santana"
      description="Desenvolvimento freelancer de sites, aplicações web, sistemas, integrações e automações sob medida para o seu negócio."
      path="/developer"
      service={{ name: 'Desenvolvimento de software freelancer', type: 'Desenvolvimento de sites, sistemas web, integrações e automações' }}
    />
    <ProfessionalPage
      eyebrow="Desenvolvedor Freelancer"
      title="Produtos digitais que saem da ideia e chegam ao ar"
      description="Desenvolvo soluções web modernas, rápidas e escaláveis para profissionais, empresas e novos negócios. Do planejamento à publicação, cada entrega é pensada para resolver um problema real."
      heroIcon={Briefcase}
      serviceBanner={{
        title: 'Desenvolvimento de software',
        description: 'Crie seu site, sistema ou automação de acordo com a necessidade do seu negócio.',
        details: 'Escopo claro · Desenvolvimento sob medida · Transparência em cada etapa',
        primaryLabel: 'Começar agora',
      }}
      services={[
        { icon: Layout, title: 'Sites e landing pages', description: 'Páginas institucionais, portfólios e landing pages responsivas que comunicam sua proposta de valor.' },
        { icon: Code2, title: 'Aplicações web', description: 'Sistemas sob medida, painéis administrativos e interfaces modernas com foco em experiência do usuário.' },
        { icon: Plug, title: 'Integrações e automações', description: 'Conexão entre APIs, serviços e processos para reduzir trabalho manual e ganhar eficiência.' },
        { icon: Database, title: 'Back-end e dados', description: 'APIs, autenticação, bancos de dados e regras de negócio estruturadas para o seu produto.' },
        { icon: Workflow, title: 'Evolução de sistemas', description: 'Melhorias, novas funcionalidades e manutenção para aplicações que já estão em operação.' },
        { icon: Rocket, title: 'Publicação e performance', description: 'Preparação para produção, deploy e otimizações para uma entrega estável e pronta para uso.' },
      ]}
      highlight={{
        badge: 'Destaques',
        title: 'Desenvolvimento de software',
        subtitle: 'Aplicações, sites, sistemas web e automações para transformar ideias em produtos digitais.',
        items: [
          { title: 'Sites e landing pages', description: 'Presença digital responsiva, profissional e preparada para converter visitantes.' },
          { title: 'Sistemas web', description: 'Painéis, plataformas e aplicações personalizadas para a operação do seu negócio.' },
          { title: 'Integrações e automações', description: 'Conexão entre ferramentas e processos para reduzir tarefas manuais.' },
        ],
        ctaLabel: 'Falar sobre um projeto',
      }}
      technologies={freelancerTechnologies}
      businessCta={{
        title: 'Vamos transformar sua ideia em um produto digital',
        description: 'Converse comigo sobre sua necessidade. Avalio o projeto e proponho um caminho técnico claro para a sua solução.',
        primaryLabel: 'Falar sobre o projeto',
        emailSubject: 'Projeto freelancer',
      }}
      resultsCta={{
        badge: 'Soluções para o seu negócio',
        title: 'Transforme sua ideia em uma solução',
        accentTitle: 'digital pronta para gerar resultado.',
        description: 'O objetivo não é apenas ter um site ou sistema: é construir uma ferramenta útil, clara e preparada para a realidade do seu negócio.',
        ctaLabel: 'Conversar sobre meu projeto',
        pills: ['Escopo e investimento alinhados antes de começar', 'Acompanhamento durante o desenvolvimento', 'Entrega pronta para publicar e evoluir'],
        cards: [
          { title: 'Diagnóstico inicial', description: 'Entendemos seu objetivo, público e prioridades para definir o melhor caminho antes de desenvolver.' },
          { title: 'Construção sob medida', description: 'A solução é planejada de acordo com a sua operação, sem pacotes genéricos ou funcionalidades desnecessárias.' },
          { title: 'Entrega com propósito', description: 'Você recebe um produto digital funcional, responsivo e pronto para apoiar o próximo passo do seu negócio.' },
        ],
      }}
      skills={[
        { title: 'Front-end', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'shadcn/ui'] },
        { title: 'Back-end', items: ['Node.js', 'NestJS', 'Express.js', 'APIs REST', 'GraphQL', 'gRPC'] },
        { title: 'Dados e infraestrutura', items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Docker', 'AWS', 'Cloud'] },
        { title: 'Qualidade e colaboração', items: ['Git', 'GitHub', 'Jest', 'Swagger', 'Scrum', 'Kanban'] },
        { title: 'Automação', items: ['n8n', 'Webhooks', 'Integração de APIs', 'RabbitMQ', 'CI/CD'] },
        { title: 'Boas práticas', items: ['Clean Code', 'SOLID', 'Segurança', 'Autenticação', 'LGPD'] },
      ]}
      steps={[
        { title: 'Entendimento', description: 'Conversamos sobre o contexto, objetivo, público e prioridades da sua demanda.' },
        { title: 'Construção', description: 'Definimos o caminho técnico e desenvolvo com acompanhamento e comunicação clara.' },
        { title: 'Entrega', description: 'Testamos, publicamos e deixamos a solução pronta para você usar e evoluir.' },
      ]}
      ctaTitle="Tem um projeto para tirar do papel?"
      ctaDescription="Vamos conversar sobre a melhor solução para a sua ideia, negócio ou produto digital."
      ctaMessage="Olá, Samuel! Gostaria de conversar sobre um projeto freelancer."
    />
  </>
);

export default FreelancerPage;
