import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import softwareAiIllustration from '@/assets/software-ai-illustration.png';

const FeatureHighlight = ({ badge = 'Destaques', title, subtitle, items, ctaLabel, ctaHref }) => (
  <section className="bg-slate-950 px-4 py-20 sm:py-24">
    <div className="mx-auto grid max-w-6xl items-center gap-12 rounded-3xl border border-blue-500/20 bg-slate-900 p-8 shadow-2xl shadow-blue-950/50 sm:p-12 lg:grid-cols-2 lg:gap-20">
      <div className="mx-auto w-full max-w-md">
        <img
          src={softwareAiIllustration}
          alt="Ilustração de desenvolvimento de software, automação e inteligência artificial"
          className="h-auto w-full"
          loading="lazy"
        />
      </div>

      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          {badge}
        </span>
        <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">{title}</h2>
        <p className="mt-5 text-lg text-slate-300">{subtitle}</p>

        <div className="mt-8 divide-y divide-slate-700 border-y border-slate-700">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4 py-5">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
                <Check className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-1 leading-relaxed text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700"
        >
          {ctaLabel}
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  </section>
);

export default FeatureHighlight;
