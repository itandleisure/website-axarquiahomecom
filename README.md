# axarquiahome.com

Leadgen-site voor buitenlandse huiseigenaren en kopers in de Axarquía (Málaga).
Gebouwd met [Astro](https://astro.build) als statische site, gepubliceerd via GitHub Pages.

## Structuur

| Pad | Wat |
|---|---|
| `src/data/site.ts` | Alle bedrijfsgegevens, prijzen, menu en de `launchReady`-schakelaar |
| `src/data/projects.ts`, `src/data/team.ts` | Projecten en teamleden |
| `src/pages/nl/` | Nederlandse pagina's (later `en/` en `de/`) |
| `src/pages/nl/aanvraag.astro` | De keuzehulp (formulier in 6 stappen) |
| `src/layouts/Base.astro` | Basislayout met SEO, hreflang en gestructureerde gegevens |
| `apps-script/` | Google Apps Script voor aanvragen en checklist-inschrijvingen naar Sheet en e-mail |
| `src/data/checklist.ts` | Tekst van de gratis aankoopchecklist (4 talen): landingspagina, formulier en pdf |
| `public/downloads/` | De checklist-pdf's. Opnieuw maken na een tekstwijziging met `npm run pdf` |
| `INVULLEN.md` | Wat er nog ontbreekt voor livegang |

## Lokaal draaien

```sh
npm install
npm run dev      # http://localhost:4321/nl/
npm run build    # bouwt naar dist/
```

## Publiceren

Elke push naar `main` bouwt en publiceert de site via `.github/workflows/deploy.yml`.
Het eigen domein staat in `public/CNAME`.
