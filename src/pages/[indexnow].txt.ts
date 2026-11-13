// IndexNow-sleutelbestand: /<sleutel>.txt met de sleutel als inhoud, zodat Bing kan
// controleren dat de meldingen van deze site komen. Sleutel staat in src/data/site.ts.
import type { APIRoute, GetStaticPaths } from 'astro';
import { site } from '../data/site';

export const getStaticPaths: GetStaticPaths = () => (site.indexNowKey ? [{ params: { indexnow: site.indexNowKey } }] : []);

export const GET: APIRoute = () => new Response(site.indexNowKey, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
