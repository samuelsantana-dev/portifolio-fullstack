import React from 'react';
import { BarChart3, CalendarCheck, CheckCircle2, MessageCircle, Workflow } from 'lucide-react';

const resultIcons = [CalendarCheck, Workflow, BarChart3];

const ResultsCta = ({ badge, title, accentTitle, description, ctaLabel, ctaHref, pills, cards }) => (
  <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:py-24">
    <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 12% 18%, rgba(96, 165, 250, 0.45) 1.5px, transparent 1.5px), radial-gradient(circle at 84% 68%, rgba(34, 211, 238, 0.35) 1.5px, transparent 1.5px)', backgroundSize: '42px 42px, 54px 54px' }} />
    <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
    <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

    <div className="relative mx-auto max-w-6xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
        <span className="h-2 w-2 rounded-full bg-cyan-400" />
        {badge}
      </span>
      <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        {title}<br />
        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">{accentTitle}</span>
      </h2>
      <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">{description}</p>
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 px-7 py-4 font-bold text-white shadow-lg shadow-blue-950 transition-transform hover:scale-[1.02]"
      >
        <MessageCircle className="h-5 w-5" />
        {ctaLabel}
      </a>

      <div className="mx-auto mt-7 flex max-w-5xl flex-wrap justify-center gap-3">
        {pills.map((pill) => (
          <span key={pill} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 shadow-sm ring-1 ring-slate-700">
            <CheckCircle2 className="h-4 w-4 text-cyan-400" />
            {pill}
          </span>
        ))}
      </div>

      <div className="mt-12 grid overflow-hidden rounded-3xl border border-blue-400/25 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-left text-white shadow-xl shadow-blue-950/60 md:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = resultIcons[index % resultIcons.length];
          return (
            <article key={card.title} className="p-7 sm:p-9 md:border-r md:border-white/20 md:last:border-r-0">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-blue-100">{card.description}</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default ResultsCta;
