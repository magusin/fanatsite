import Head from 'next/head';

export default function SEOHead({ title, description, url }) {
  return (
    <Head>
      <title>{title ? `${title} - Fanatsy` : "Fanatsy - Développeur Web, création de site web et application"}</title>
      <meta name="description" content={description || "Développeur web basé à Valdivienne (Vienne; Poitiers et alentours), créations de sites web et applications modernes, adaptatifs et optimisés pour le SEO."} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      
      {/* Open Graph / Réseaux sociaux */}
      <meta property="og:title" content={title || "Fanatsy - Développeur Web, création de site web et application"} />
      <meta property="og:description" content={description || "Développeur web basé à Valdivienne (Vienne; Poitiers et alentours), créations de sites web et applications modernes, adaptatifs et optimisés pour le SEO."} />
      <meta property="og:image" content="/img/preview.png" />
      <meta property="og:url" content={url || "https://fanatsy.dev"} />
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "Fanatsy - Développeur Web, création de site web et application"} />
      <meta name="twitter:description" content={description || "Développeur web basé à Valdivienne (Vienne; Poitiers et alentours), créations de sites web et applications modernes, adaptatifs et optimisés pour le SEO."} />
      <meta name="twitter:image" content="/img/preview.png" />

      {/* Canonical URL */}
      <link rel="canonical" href={url || "https://fanatsy.dev"} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}