import React from 'react';
import { Helmet } from 'react-helmet';
import { Briefcase, Code2, Database, Layout, Plug, Rocket, Workflow } from 'lucide-react';
import ProfessionalPage from '@/components/ProfessionalPage';

const FreelancerPage = () => (
  <>
    <Helmet>
      <title>Samuel Santana | Desenvolvedor Freelancer</title>
      <meta name="description" content="Desenvolvimento freelancer de sites, aplicações web, integrações e automações." />
    </Helmet>
    <ProfessionalPage
      eyebrow="Desenvolvedor Freelancer"
      title="Produtos digitais que saem da ideia e chegam ao ar"
      description="Desenvolvo soluções web modernas, rápidas e escaláveis para profissionais, empresas e novos negócios. Do planejamento à publicação, cada entrega é pensada para resolver um problema real."
      heroIcon={Briefcase}
      services={[
        { icon: Layout, title: 'Sites e landing pages', description: 'Páginas institucionais, portfólios e landing pages responsivas que comunicam sua proposta de valor.' },
        { icon: Code2, title: 'Aplicações web', description: 'Sistemas sob medida, painéis administrativos e interfaces modernas com foco em experiência do usuário.' },
        { icon: Plug, title: 'Integrações e automações', description: 'Conexão entre APIs, serviços e processos para reduzir trabalho manual e ganhar eficiência.' },
        { icon: Database, title: 'Back-end e dados', description: 'APIs, autenticação, bancos de dados e regras de negócio estruturadas para o seu produto.' },
        { icon: Workflow, title: 'Evolução de sistemas', description: 'Melhorias, novas funcionalidades e manutenção para aplicações que já estão em operação.' },
        { icon: Rocket, title: 'Publicação e performance', description: 'Preparação para produção, deploy e otimizações para uma entrega estável e pronta para uso.' },
      ]}
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
