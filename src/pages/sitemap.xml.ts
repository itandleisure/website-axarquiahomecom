import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Alle .astro-pagina's onder /nl/ (en later /en/, /de/), behalve bedankt.
const pages = import.meta.glob('./{nl,en,de}/**/*.astro', { eager: false });

export const GET: APIRoute = () => {
  const paths = Object.keys(pages)
    .map((f) => f.replace(/^\.\//, '/').replace(/index\.astro$/, '').replace(/\.astro$/, '/'))
    .filter((p) => !/\/(bedankt|thank-you|danke|tack)\//.test(p))
    .sort();
  const today = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${site.url}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
