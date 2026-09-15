import React from 'react';
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Check,
  CircleGauge,
  Code2,
  FileSearch,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Network,
  Route,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import { motion } from 'framer-motion';
import PageNavigation from '@/components/PageNavigation';
import ProfileIdentity from '@/components/ProfileIdentity';
import Seo from '@/components/Seo';
import { getWhatsAppUrl } from '@/data/profile';

const opportunities = [
  { icon: Bot, title: 'Operações que consomem tempo', description: 'Identificamos tarefas repetitivas, retrabalho e pontos de espera que podem ser automatizados com segurança.' },
  { icon: Network, title: 'Ferramentas desconectadas', description: 'Desenhamos fluxos entre sistemas, planilhas, APIs e canais de atendimento para a informação circular melhor.' },
  { icon: BarChart3, title: 'Decisões sem visão de dados', description: 'Organizamos indicadores e informações importantes para transformar dados dispersos em contexto de decisão.' },
];

const roadmap = [
  { number: '01', icon: FileSearch, title: 'Leitura do cenário', description: 'Entendo o processo atual, as pessoas envolvidas, ferramentas e os gargalos que mais impactam a operação.' },
  { number: '02', icon: Lightbulb, title: 'Priorização de oportunidades', description: 'Separamos o que é interessante do que realmente tem viabilidade, impacto e retorno para o seu momento.' },
  { number: '03', icon: Route, title: 'Plano de ação aplicável', description: 'Você recebe recomendações, escopo e próximos passos claros — seja para implementar comigo ou com seu time.' },
];

const engagementFormats = [
  { icon: CircleGauge, title: 'Diagnóstico de IA', description: 'Uma análise focada para revelar onde IA, automação ou integração podem reduzir esforço e criar ganho prático.', detail: 'Ideal para começar com clareza' },
  { icon: UsersRound, title: 'Acompanhamento técnico', description: 'Apoio recorrente para decisões de arquitetura, priorização, fornecedores e evolução de produtos digitais.', detail: 'Ideal para times e líderes' },
  { icon: Sparkles, title: 'Projeto de implementação', description: 'Da estratégia à construção: estruturo e implemento a solução priorizada com metas e entregas alinhadas.', detail: 'Ideal quando o caminho já está definido' },
];

const principles = [
  'O processo vem antes da ferramenta.',
  'A solução precisa caber na operação atual.',
  'Dados, privacidade e segurança entram desde o início.',
];

const AiConsultingPage = () => {
  const whatsappUrl = getWhatsAppUrl('Olá, Samuel! Gostaria de conversar sobre consultoria em IA e tecnologia.');

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <Seo
        title="Consultoria em IA e Tecnologia | Samuel Santana"
        description="Consultoria em inteligência artificial, automações e tecnologia para transformar processos em resultados mensuráveis."
        path="/consulting-software-ia"
        service={{ name: 'Consultoria em IA e tecnologia', type: 'Consultoria em inteligência artificial, automação de processos e desenvolvimento de software' }}
      />

      <section className="relative isolate px-4 pb-20 pt-8 sm:pb-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(124,58,237,0.28),transparent_27%),radial-gradient(circle_at_78%_22%,rgba(6,182,212,0.2),transparent_25%),linear-gradient(155deg,#07111f_30%,#0e1d36_70%,#07111f)]" />
        <div className="pointer-events-none absolute left-[12%] top-36 -z-10 h-64 w-64 rounded-full border border-cyan-300/10" />
        <div className="pointer-events-none absolute right-[8%] top-20 -z-10 h-96 w-96 rounded-full border border-violet-300/10" />

        <div className="mx-auto max-w-6xl">
          <PageNavigation />
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                <ProfileIdentity dark />
              </motion.div>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }} className="mt-10 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                <BrainCircuit className="h-4 w-4" /> Consultoria em IA e tecnologia
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.14 }} className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
                Menos promessa de IA. <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">Mais clareza para decidir.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                Transformo desafios operacionais em um plano tecnológico realista. A consultoria conecta processos, dados, automações e software ao que o seu negócio precisa melhorar agora.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.26 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition-transform hover:scale-[1.02]">
                  Agendar diagnóstico <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#como-funciona" className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-950/30 px-6 py-3.5 font-bold text-slate-100 transition-colors hover:border-cyan-300/60">
                  Entender a consultoria
                </a>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.16 }} className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-violet-500/10 to-transparent blur-2xl" />
              <div className="relative rounded-[1.75rem] border border-cyan-300/20 bg-slate-950/65 p-6 shadow-2xl shadow-black/25 backdrop-blur sm:p-8">
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-5">
                  <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Mapa de oportunidade</p><p className="mt-1 text-lg font-bold">Tecnologia com propósito</p></div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300"><Sparkles className="h-6 w-6" /></div>
                </div>
                <div className="space-y-4 py-6">
                  {['Processo atual', 'Impacto esperado', 'Viabilidade técnica'].map((item, index) => (
                    <div key={item} className="flex items-center gap-4 rounded-xl border border-slate-700/80 bg-slate-900/70 p-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-bold text-cyan-300">0{index + 1}</span>
                      <span className="font-semibold text-slate-200">{item}</span><Check className="ml-auto h-5 w-5 text-cyan-300" />
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-gradient-to-r from-cyan-400/15 to-violet-400/15 px-4 py-4 text-sm leading-relaxed text-slate-200">A boa solução não começa escolhendo uma ferramenta. Começa entendendo a decisão que ela precisa melhorar.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-cyan-300/15 bg-[#09182b] px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative mx-auto flex h-48 w-full max-w-sm items-center justify-center overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 to-violet-500/20 sm:h-64">
            <div className="absolute h-40 w-40 rounded-full border border-cyan-200/15" />
            <div className="absolute h-64 w-64 rounded-full border border-violet-300/10" />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-950/30"><GraduationCap className="h-10 w-10" /></span>
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300"><Code2 className="h-4 w-4" /> Aulas e consultorias técnicas remotas</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Tecnologia explicada no seu ritmo, do primeiro código ao próximo desafio.</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-slate-300">Aulas individuais e consultorias técnicas para desenvolvedores, estudantes, profissionais em transição de carreira e qualquer pessoa que queira aprender tecnologia de forma prática. O conteúdo é adaptado ao seu objetivo e cobrado por hora.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['JavaScript e TypeScript', 'IA, APIs e automações', 'Bancos de dados e projetos'].map((topic) => (
                <span key={topic} className="flex items-center gap-2 text-sm font-semibold text-slate-200"><Check className="h-4 w-4 text-cyan-300" /> {topic}</span>
              ))}
            </div>
            <a href={getWhatsAppUrl('Olá, Samuel! Gostaria de saber mais sobre aulas ou consultoria técnica em tecnologia.')} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl border border-cyan-300/50 bg-cyan-400/10 px-5 py-3 font-bold text-cyan-100 transition-colors hover:bg-cyan-400/20">
              Conversar sobre aulas ou consultoria <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-950/70 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-300">Onde olhar primeiro</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">A tecnologia entra onde o negócio sente o problema.</h2></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {opportunities.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-slate-800 bg-[#0b1728] p-6 transition-colors hover:border-cyan-400/40"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-slate-400">{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="relative px-4 py-20 sm:py-28">
        <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
        <div className="relative mx-auto max-w-6xl"><div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Como funciona</p><h2 className="mt-4 text-4xl font-bold leading-tight">Consultoria que termina em direção, não em apresentação.</h2><p className="mt-5 leading-relaxed text-slate-400">Cada etapa reduz incertezas antes de qualquer investimento técnico. Assim, sua próxima ação tem motivo, prioridade e critério de sucesso.</p></div>
          <div className="space-y-5">{roadmap.map(({ number, icon: Icon, title, description }) => (<article key={number} className="group grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/45 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center"><span className="font-mono text-2xl font-bold text-violet-300">{number}</span><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 leading-relaxed text-slate-400">{description}</p></div><Icon className="h-7 w-7 text-cyan-300 transition-transform group-hover:scale-110" /></article>))}</div>
        </div></div>
      </section>

      <section className="bg-gradient-to-b from-[#111d34] to-[#07111f] px-4 py-20">
        <div className="mx-auto max-w-6xl"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Formas de trabalhar</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">O apoio certo para o estágio do seu desafio.</h2></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">{engagementFormats.map(({ icon: Icon, title, description, detail }) => (<article key={title} className="flex flex-col rounded-2xl border border-slate-700/80 bg-slate-950/55 p-7 shadow-xl shadow-slate-950/20"><Icon className="h-8 w-8 text-violet-300" /><h3 className="mt-6 text-2xl font-bold">{title}</h3><p className="mt-3 flex-1 leading-relaxed text-slate-400">{description}</p><p className="mt-7 border-t border-slate-700 pt-5 text-sm font-semibold text-cyan-200">{detail}</p></article>))}</div>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-24"><div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#0c1930] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-gradient-to-br from-cyan-400/15 to-violet-500/20 p-8 sm:p-12"><ShieldCheck className="h-10 w-10 text-cyan-300" /><h2 className="mt-7 text-3xl font-bold leading-tight">Tecnologia responsável também é resultado.</h2><p className="mt-5 leading-relaxed text-slate-300">Uso de IA precisa respeitar contexto, dados e pessoas. Por isso, privacidade, controle e manutenção fazem parte da conversa — não são um detalhe de fim de projeto.</p></div>
        <div className="p-8 sm:p-12"><p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">Princípios da consultoria</p><ul className="mt-7 space-y-5">{principles.map((principle) => (<li key={principle} className="flex gap-4 text-lg text-slate-200"><span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/15"><Check className="h-4 w-4 text-cyan-300" /></span>{principle}</li>))}</ul></div>
      </div></section>

      <section className="px-4 pb-24 pt-8 text-center"><div className="mx-auto max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Próximo passo</p><h2 className="mt-4 text-3xl font-bold sm:text-5xl">Vamos encontrar o melhor ponto de partida?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">Conte o desafio que você quer resolver. A primeira conversa serve para entender o cenário e indicar se a consultoria faz sentido.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition-transform hover:scale-[1.02]"><MessageCircle className="h-5 w-5" /> Conversar sobre meu cenário</a></div></section>
    </main>
  );
};

export default AiConsultingPage;
