# Werkafspraken voor Claude (axarquiahome.com)

Antwoord en schrijf commits in het Nederlands.

## Zoekwoorden en nieuwe pagina's

Doel van de site: leads voor renovatie, aankoopkeuring, sleutelbeheer en onderhoud in de Axarquía.
Verkeer moet uit zoekwoorden met volume komen; de dienstpagina's zelf hebben bijna geen zoekvolume.

1. **Elke geïndexeerde pagina heeft precies één hoofdzoekwoord.** Gidsen en kosten/probleem/zelf-doen-pagina's
   in hun eigen `keyword`-veld, alle andere pagina's in `src/data/zoekwoorden.ts` (`null` = bewust geen
   zoekwoord, alleen voor overzichts- en contactpagina's). Plaatspagina's via `placeKeyword`.
2. **Geen nieuwe gids op een zoekwoord zonder zoekvolume.** Check het volume eerst (DataForSEO of Ubersuggest,
   land van de taal). Onder ±50 zoekopdrachten per maand alleen als het bewust een ondersteunende pagina is
   voor een speerpunt of dienst, en dan kort. Liever een bestaande speerpunt-gids uitbreiden (FAQ, tabellen,
   actuele cijfers) dan een nieuwe dunne gids maken.
3. **Geen twee pagina's in dezelfde taal op hetzelfde zoekwoord of dezelfde zoekintentie.** Overzichtspagina's
   (gidsen, problemen, zelf doen) sturen niet op het zoekwoord van een gids die eronder valt.
4. **Speerpunten** (`speerpunten` in `src/data/zoekwoorden.ts`) krijgen de backlinks (Popi) en de interne links.
   Het zoekwoord staat in de titel, de pagina linkt naar de bijbehorende dienst en de dienst linkt terug.
5. **Plaatspagina's** beginnen titel en H1 met de kale plaatsnaam ("Comares: ..."), want daar zit het volume.
6. Nieuwe gids of kostenpagina? Zet hem ook in het juiste cluster in `src/data/clusters.ts`.

## Controle voor elke PR

```
npm run build
npm run seo          # titels, descriptions, h1, canonical
npm run zoekwoorden  # elke pagina een hoofdzoekwoord, geen kannibalisatie, speerpunten in orde
```

Het overzicht met volumes en posities per pagina staat in de projectmap
`axarquiahome/overzicht/zoekwoorden-posities-per-pagina-<datum>.xlsx`.
