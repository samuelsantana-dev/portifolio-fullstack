import React, { lazy, Suspense } from 'react';
import { siteRoutes } from '@/data/routes';

const LinksPage = lazy(() => import('@/pages/LinksPage'));
const FreelancerPage = lazy(() => import('@/pages/FreelancerPage'));
const AiConsultingPage = lazy(() => import('@/pages/AiConsultingPage'));
const FullStackPage = lazy(() => import('@/pages/FullStackPage'));

const PageLoader = () => (
  <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-300" aria-busy="true" aria-label="Carregando página">
    <span className="animate-pulse text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Carregando</span>
  </main>
);
import Seo from '@/components/Seo';

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  let PageComponent = LinksPage;

  if (pathname === siteRoutes.freelancer) {
    PageComponent = FreelancerPage;
  } else if (pathname === siteRoutes.aiConsulting) {
    PageComponent = AiConsultingPage;
  } else if (pathname === siteRoutes.fullStack) {
    PageComponent = FullStackPage;
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <PageComponent />
    </Suspense>
  );
}

export default App;
