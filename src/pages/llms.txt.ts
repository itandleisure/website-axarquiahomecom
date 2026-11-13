// /llms.txt: korte, leesbare samenvatting van de site voor AI-assistenten (ChatGPT, Gemini,
// Perplexity, Claude). Zie https://llmstxt.org. Wordt bij elke build opnieuw gemaakt uit
// dezelfde gegevens als de site zelf, dus hoeft niet met de hand bijgehouden te worden.
import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { services } from '../i18n';
import { guidesBy, guideHref } from '../data/guides';

const abs = (p: string) => new URL(p, site.url).href;

export const GET: APIRoute = () => {
  const villages = site.villages.join(', ');
  const lines = [
    `# ${site.brand}`,
    '',
    `> ${site.brand} (${site.domain}) is the English and Dutch-speaking point of contact for foreign homeowners and buyers in the Axarquía, the coastal and mountain area east of Málaga, Andalusia, Spain. Renovation and building work, key holding and property checks, holiday-rental management, maintenance, pools, pre-purchase surveys and legalisation (AFO) are carried out by a Dutch-led building team with ${site.experienceYears} years of experience.`,
    '',
    `- Area served: the whole Axarquía, including ${villages}.`,
    '- Languages: Dutch, English and Spanish (German and Swedish pages; contact in English or Dutch).',
    `- Contact: ${site.operator.email}, or the request form at ${abs('/en/request/')} (English) and ${abs('/nl/aanvraag/')} (Dutch).`,
    '- Typical questions we answer: Which Dutch or English-speaking builder can renovate my house in the Axarquía? Who does key holding for my holiday home? What does renovating a finca cost? How do I legalise a house with AFO? Who can survey a house before I buy near Málaga?',
    '',
    '## Services (English)',
    ...services.en.map((s) => `- [${s.title}](${abs(s.href)}): ${s.text}`),
    '',
    '## Diensten (Nederlands)',
    ...services.nl.map((s) => `- [${s.title}](${abs(s.href)}): ${s.text}`),
    '',
    '## Guides (English)',
    ...guidesBy.en.map((g) => `- [${g.title}](${abs(guideHref('en', g))}): ${g.description}`),
    '',
    '## Gidsen (Nederlands)',
    ...guidesBy.nl.map((g) => `- [${g.title}](${abs(guideHref('nl', g))}): ${g.description}`),
    '',
    '## Optional',
    `- [About us](${abs('/en/about-us/')})`,
    `- [Over ons](${abs('/nl/over-ons/')})`,
    `- [Sitemap](${abs('/sitemap.xml')})`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
