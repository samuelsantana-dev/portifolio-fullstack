import React from 'react';
import { Link2, Sparkles, Code2 } from 'lucide-react';
import { siteRoutes } from '@/data/routes';

const navigationItems = [
  { label: 'Links', href: siteRoutes.links, icon: Link2 },
  { label: 'Desenvolvedor', href: siteRoutes.freelancer, icon: Code2 },
  { label: 'Consultoria', href: siteRoutes.aiConsulting, icon: Sparkles },
];

const PageNavigation = ({ variant = 'dark' }) => {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isLight = variant === 'light';

  return (
    <nav aria-label="Navegação entre páginas profissionais" className="mx-auto mb-10 flex w-full max-w-3xl flex-wrap justify-center gap-2">
      {navigationItems.map(({ label, href, icon: Icon }) => {
        const isCurrent = pathname === href;
        return (
          <a
            key={href}
            href={href}
            aria-current={isCurrent ? 'page' : undefined}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              isCurrent
                ? 'border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-950/30'
                : isLight
                  ? 'border-blue-200 bg-white/70 text-[#142956] hover:border-blue-400 hover:bg-white'
                  : 'border-slate-700 bg-slate-900/75 text-slate-200 hover:border-blue-400/60 hover:text-white'
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        );
      })}
    </nav>
  );
};

export default PageNavigation;
