// Zet de printversies van de checklists (dist/print/<id>/<taal>/) om naar pdf's
// in public/downloads/. Gebruik: npm run pdf (bouwt eerst de site).
// Vereist Playwright met Chromium (npx playwright install chromium).
import { createRequire } from 'node:module';
import { readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

// Via require, zodat ook een globaal geïnstalleerde Playwright wordt gevonden
const { chromium } = createRequire(import.meta.url)('playwright');

const dist = resolve('dist/print');
const out = resolve('public/downloads');
if (!existsSync(dist)) throw new Error('dist/print ontbreekt: draai eerst npm run build');
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
const pages = readdirSync(dist).flatMap((id) => (existsSync(join(dist, id, 'index.html')) ? [] : readdirSync(join(dist, id)).map((lang) => `${id}/${lang}`)));
for (const lang of pages) {
  const file = join(dist, lang, 'index.html');
  if (!existsSync(file)) continue;
  await page.goto(pathToFileURL(file).href, { waitUntil: 'load' });
  const name = await page.getAttribute('meta[name="pdf-file"]', 'content');
  const footer = await page.getAttribute('meta[name="pdf-footer"]', 'content');
  await page.pdf({
    path: join(out, name),
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `<div style="width:100%;font-size:8px;color:#625b54;padding:0 16mm;display:flex;justify-content:space-between;font-family:Arial,sans-serif"><span>${footer}</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`,
  });
  console.log(`${lang}: public/downloads/${name}`);
}
await browser.close();
