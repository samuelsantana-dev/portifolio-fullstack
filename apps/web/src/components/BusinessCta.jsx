import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const BusinessCta = ({ title, description, primaryLabel, primaryHref, secondaryHref }) => (
  <section className="bg-slate-950 px-4 py-20 sm:py-24">
    <div className="card-lift mx-auto max-w-6xl rounded-3xl border border-blue-400/25 bg-gradient-to-br from-blue-800 via-blue-700 to-cyan-600 px-6 py-16 text-center text-white shadow-2xl shadow-blue-950/60 sm:px-12 sm:py-20">
      <h2 className="text-4xl font-bold leading-tight sm:text-6xl">{title}</h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-50 sm:text-xl">{description}</p>
      <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
        <a href={primaryHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition-transform hover:scale-[1.02]">
          {primaryLabel}
          <ArrowRight className="h-5 w-5" />
        </a>
        <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-7 py-4 font-bold text-white transition-colors hover:bg-white/10">
          <MessageCircle className="h-5 w-5" />
          Chamar no WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default BusinessCta;
