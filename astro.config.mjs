// @ts-check
import { defineConfig } from 'astro/config';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const SITE = 'https://axarquiahome.com';

/**
 * Sitemap na de build: alle echte pagina's (ook de plaatspagina's met [slug] en de Zweedse),
 * zonder de pagina's die noindex hebben (bedankt, 404, lege projectpagina's, de taalkeuze op /).
 */
function sitemap() {
  return {
    name: 'axh-sitemap',
    hooks: {
      'astro:build:done': async ({ dir, pages }) => {
        const out = fileURLToPath(dir);
        const urls = [];
        for (const { pathname } of pages) {
          if (!pathname || pathname === '404/') continue;
          const html = await readFile(`${out}${pathname}index.html`, 'utf8').catch(() => '');
          if (!html || /<html[^>]*data-noindex/.test(html)) continue;
          urls.push(`${SITE}/${pathname}`);
        }
        urls.sort();
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
          .map((u) => `  <url><loc>${u}</loc></url>`)
          .join('\n')}\n</urlset>\n`;
        await writeFile(`${out}sitemap.xml`, xml);
      },
    },
  };
}

// Statische site. Live via GitHub Pages op het eigen domein (zie public/CNAME).
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
  integrations: [sitemap()],
});
