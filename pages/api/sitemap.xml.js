import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default async function handler(req, res) {
  // Définition des URLs du site
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/services', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.6 },
    { url: '/realisations', changefreq: 'weekly', priority: 0.7 },
  ];

  // Génération du sitemap
  const stream = new SitemapStream({ hostname: 'https://fanatsy.dev' });

  res.setHeader('Content-Type', 'application/xml');
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream));

  res.end(sitemap.toString());
}