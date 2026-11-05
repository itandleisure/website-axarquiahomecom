import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { places, placeBase, placeHref, type PlacePage } from '../data/places';
import { placeContent } from '../data/place-content';
import { hasMunicipalPages } from '../data/place-tabs';

// Alle .astro-pagina's onder /nl/, /en/, /de/ en /sv/, behalve bedankt.
// Dynamische routes ([slug]) komen er niet vanzelf in; de plaatspagina's voegen we hieronder toe vanuit de plaatsenlijst.
const pages = import.meta.glob('./{nl,en,de,sv}/**/*.astro', { eager: false });

type PlaceLang = keyof typeof placeBase;

const placePaths = places
  .filter((p) => p.built)
  .flatMap((p) =>
    (Object.keys(placeBase) as PlaceLang[]).flatMap((lang) => {
      const c = (placeContent[p.slug] as Partial<Record<PlaceLang, { see?: unknown; living?: unknown }>> | undefined)?.[lang];
      if (!c) return [];
      const subs: PlacePage[] = ['overview', ...(c.see ? (['see'] as const) : []), ...(c.living ? (['living'] as const) : [])];
      if (hasMunicipalPages(lang, p)) subs.push('permit', 'practical');
      return subs.map((page) => placeHref(lang, p, page));
    }),
  );

export const GET: APIRoute = () => {
  const staticPaths = Object.keys(pages)
    .filter((f) => !f.includes('['))
    .map((f) => f.replace(/^\.\//, '/').replace(/index\.astro$/, '').replace(/\.astro$/, '/'))
    .filter((p) => !/\/(bedankt|thank-you|danke|tack)\//.test(p));
  const paths = [...new Set([...staticPaths, ...placePaths])].sort();
  const today = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${site.url}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
