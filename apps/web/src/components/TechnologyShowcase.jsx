import React from 'react';
import { Check } from 'lucide-react';

const TechnologyShowcase = ({ technologies, subtitle = 'Stack escolhida de acordo com cada cenário e necessidade.' }) => (
  <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:py-24">
    <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
    <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
    <div className="relative mx-auto max-w-6xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
        <span className="h-2 w-2 rounded-full bg-blue-500" />
        Tecnologias que utilizo
      </span>
      <h2 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-6xl">Tecnologias que utilizo</h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">{subtitle}</p>

      <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-200 shadow-sm shadow-black/20"
          >
            <Check className="h-4 w-4 text-blue-600" />
            {technology}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologyShowcase;
