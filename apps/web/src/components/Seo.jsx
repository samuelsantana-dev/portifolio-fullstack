import React from 'react';
import { Helmet } from 'react-helmet';
import { profile } from '@/data/profile';

export const siteUrl = profile.links.general.replace(/\/$/, '');

const Seo = ({
  title,
  description,
  path = '/',
  service,
}) => {
  const canonicalUrl = new URL(path, `${siteUrl}/`).toString();
  const schema = service
    ? {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description,
      url: canonicalUrl,
      provider: {
        '@type': 'Person',
        name: profile.name,
        url: siteUrl,
        image: profile.photoUrl,
        jobTitle: profile.role,
        sameAs: Object.values(profile.links).filter((url) => url !== profile.links.general),
      },
      areaServed: 'BR',
      serviceType: service.type,
    }
    : {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      url: siteUrl,
      image: profile.photoUrl,
      jobTitle: profile.role,
      description,
      email: profile.email,
      sameAs: Object.values(profile.links).filter((url) => url !== profile.links.general),
    };

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content={profile.name} />
      <meta name="theme-color" content="#07111f" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Samuel Santana" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={profile.photoUrl} />
      <meta property="og:image:alt" content={`Foto de ${profile.name}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={profile.photoUrl} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default Seo;
