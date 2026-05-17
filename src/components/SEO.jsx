import { Helmet } from 'react-helmet-async';
import { PERSONAL } from '../constants';

export default function SEO() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://gouru-rakesh.vercel.app';

  return (
    <Helmet>
      <html lang="en" />
      <title>{PERSONAL.name} | AI & Full Stack Developer</title>
      <meta name="description" content={`${PERSONAL.name} — ${PERSONAL.tagline}`} />
      <link rel="canonical" href={siteUrl} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={`${PERSONAL.name} | Portfolio`} />
      <meta property="og:description" content={PERSONAL.tagline} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: PERSONAL.name,
          jobTitle: 'AI & Full Stack Developer',
          url: siteUrl,
          sameAs: [PERSONAL.github, PERSONAL.linkedin],
          email: PERSONAL.email,
        })}
      </script>
    </Helmet>
  );
}
