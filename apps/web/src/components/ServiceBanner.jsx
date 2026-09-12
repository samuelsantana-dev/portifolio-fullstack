import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const ServiceBanner = ({ title, description, details, primaryLabel = 'Conhecer serviços', primaryHref = '#servicos', whatsappHref }) => (
  <section className="relative isolate overflow-hidden bg-slate-950 px-4 py-20 text-white sm:py-24">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(37,99,235,0.32),transparent_28%),radial-gradient(circle_at_78%_45%,rgba(6,182,212,0.18),transparent_25%),linear-gradient(115deg,#020617_16%,#0f234c_48%,#020617_86%)]" />
    <svg className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-45" viewBox="0 0 1440 480" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke="#38bdf8" strokeWidth="1">
        <path d="M0 290 L110 210 L210 330 L350 120 L470 275 L590 66 L720 230 L850 80 L1020 300 L1160 120 L1320 250 L1440 85" />
        <path d="M18 115 L155 175 L288 70 L410 218 L560 160 L706 285 L850 170 L980 230 L1120 85 L1260 155 L1415 45" opacity=".58" />
        <path d="M120 450 L220 330 L405 420 L560 270 L740 430 L900 320 L1065 458 L1230 340 L1410 420" opacity=".45" />
      </g>
      <g fill="#38bdf8">
        {[['110', '210'], ['210', '330'], ['350', '120'], ['590', '66'], ['720', '230'], ['850', '80'], ['1020', '300'], ['1160', '120'], ['1320', '250'], ['155', '175'], ['288', '70'], ['560', '160'], ['850', '170'], ['1120', '85'], ['1260', '155']].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" />)}
      </g>
    </svg>

    <div className="mx-auto max-w-5xl text-center">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300 sm:text-xl">{description}</p>
      <p className="mt-3 text-sm font-medium text-cyan-200 sm:text-base">{details}</p>
      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <a href={primaryHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 px-7 py-4 font-bold text-white shadow-lg shadow-blue-950 transition-transform hover:scale-[1.02]">
          {primaryLabel} <ArrowRight className="h-5 w-5" />
        </a>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-300/40 bg-slate-900/60 px-7 py-4 font-bold text-white transition-colors hover:bg-blue-900/60">
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default ServiceBanner;
