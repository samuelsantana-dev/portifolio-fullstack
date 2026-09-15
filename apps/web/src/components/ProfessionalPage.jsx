import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import FeatureHighlight from '@/components/FeatureHighlight';
import BusinessCta from '@/components/BusinessCta';
import ProfileIdentity from '@/components/ProfileIdentity';
import ResultsCta from '@/components/ResultsCta';
import ServiceBanner from '@/components/ServiceBanner';
import TechnologyShowcase from '@/components/TechnologyShowcase';
import PageNavigation from '@/components/PageNavigation';
import { getWhatsAppUrl, profile } from '@/data/profile';

const ProfessionalPage = ({
  eyebrow,
  title,
  description,
  heroIcon: HeroIcon,
  services,
  highlight,
  businessCta,
  resultsCta,
  serviceBanner,
  technologies,
  skills,
  steps,
  ctaTitle,
  ctaDescription,
  ctaMessage,
}) => {
  const whatsappUrl = getWhatsAppUrl(ctaMessage);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-4 py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <PageNavigation />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6"
          >
            <ProfileIdentity dark />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10"
          >
            <HeroIcon className="h-8 w-8 text-blue-400" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-400"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="text-4xl font-bold leading-tight text-white sm:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300"
          >
            {description}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.26 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-700"
          >
            <MessageCircle className="h-5 w-5" />
            Vamos conversar
          </motion.a>
        </div>
      </section>

      {serviceBanner && <ServiceBanner {...serviceBanner} whatsappHref={whatsappUrl} />}

      <FeatureHighlight {...highlight} ctaHref={whatsappUrl} />

      {technologies && <TechnologyShowcase technologies={technologies} />}

      <section id="servicos" className="bg-slate-900/50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Como posso ajudar</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">Soluções práticas, construídas para gerar resultado e acompanhar o crescimento do seu negócio.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-xl border border-blue-500/20 bg-slate-800 p-6 transition-colors hover:border-blue-500/50"
              >
                <service.icon className="mb-5 h-10 w-10 text-blue-400" />
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-400">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {businessCta && (
        <BusinessCta
          {...businessCta}
          primaryHref={`mailto:${profile.email}?subject=${encodeURIComponent(businessCta.emailSubject)}`}
          secondaryHref={whatsappUrl}
        />
      )}

      {resultsCta && <ResultsCta {...resultsCta} ctaHref={whatsappUrl} />}

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Habilidades e tecnologias</h2>
            <p className="mt-4 text-gray-400">Tecnologias escolhidas de acordo com a necessidade de cada projeto.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((category) => (
              <div key={category.title} className="rounded-xl border border-blue-500/20 bg-slate-900 p-6">
                <h3 className="mb-5 text-xl font-bold text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="rounded-full border border-blue-500/30 bg-slate-800 px-3 py-1 text-sm text-blue-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/50 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Como funciona</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative rounded-xl border border-blue-500/20 bg-slate-800 p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">{index + 1}</span>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-4 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{ctaTitle}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">{ctaDescription}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-700"
        >
          Solicitar contato <ArrowRight className="h-5 w-5" />
        </a>
      </section>
    </main>
  );
};

export default ProfessionalPage;
