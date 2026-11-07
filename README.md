# axarquiahome.com

Leadgen-site voor buitenlandse huiseigenaren en kopers in de Axarquía (Málaga).
Gebouwd met [Astro](https://astro.build) als statische site, gepubliceerd via GitHub Pages.

## Structuur

| Pad | Wat |
|---|---|
| `src/data/site.ts` | Alle bedrijfsgegevens, prijzen, menu en de `launchReady`-schakelaar |
| `src/data/projects.ts`, `src/data/team.ts` | Projecten en teamleden |
| `src/pages/nl/`, `en/`, `de/`, `sv/`, `es/` | Pagina's per taal (Spaans: diensten en eigen gidsen, nog geen plaatspagina's) |
| `src/pages/nl/aanvraag.astro` | De keuzehulp (formulier in 6 stappen) |
| `src/layouts/Base.astro` | Basislayout met SEO, hreflang en gestructureerde gegevens |
| `apps-script/` | Google Apps Script voor aanvragen naar Sheet en e-mail |
| `INVULLEN.md` | Wat er nog ontbreekt voor livegang |

## Lokaal draaien

```sh
npm install
npm run dev      # http://localhost:4321/nl/
npm run build    # bouwt naar dist/ (inclusief sitemap.xml)
npm run seo      # controleert titels, descriptions, koppen en canonicals in dist/
```

## Publiceren

Elke push naar `main` bouwt en publiceert de site via `.github/workflows/deploy.yml`.
Het eigen domein staat in `public/CNAME`.
