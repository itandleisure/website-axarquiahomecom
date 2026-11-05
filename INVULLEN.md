# Nog in te vullen voor livegang

Alles wat nog ontbreekt staat in de code gemarkeerd met `[VUL IN]` (in `src/data/site.ts`)
en op de pagina's in een geel blok "Nog aanleveren". Zodra alles klopt, zet je
`launchReady: true` in `src/data/site.ts`: dan verdwijnen de gele blokken en mag Google indexeren.

## Van het bouwbedrijf
- [ ] Bedrijfsnaam, juridische naam, CIF/NIF, adres, telefoon, WhatsApp, e-mail voor aanvragen
- [ ] Aantal jaren actief in de regio en het verhaal van het bedrijf (Over ons)
- [ ] Teamleden: naam, functie, foto, paar zinnen (`src/data/team.ts`, foto's in `public/team/`)
- [ ] Prijzen: renovatie per m², keuken, zwembadonderhoud, sleutelbeheer-pakketten (Basis/Plus/Compleet)
- [ ] Bevestiging van de andere prijsindicaties en van de pakketinhoud sleutelbeheer
- [ ] 5 tot 10 projecten met voor- en na-foto's (`src/data/projects.ts`, foto's in `public/projecten/`)
- [ ] Naam partner aparejador/architect voor keuring en legalisatie
- [ ] Nalezen van alle teksten (beloftes zoals "reactie binnen 24 uur", "per maand opzegbaar")

## Van Frans
- [ ] Naam, KvK-nummer en adres van de onderneming (privacyverklaring)
- [ ] Apps Script web-app URL (zie `apps-script/README.md`)
- [ ] Dashboard-URL voor /statistiek/ in `statsDashboardUrl` (zie `apps-script/statistieken/README.md`)
- [ ] E-mailadres info@axarquiahome.com laten doorsturen naar je eigen mailbox
- [ ] Privacyverklaring één keer laten nakijken

## Engelse versie
- [ ] Bevestigen dat het bouwbedrijf Engelstalige klanten kan bedienen (de Engelse site belooft een "English-speaking team")
- [ ] Engelse titels en teksten bij projecten (`titleEn`, `summaryEn`, `durationEn`) en teamleden (`roleEn`, `bioEn`)

## Analyse en cookies
- [x] Google Analytics: Measurement ID G-YSBXSHM7SS ingevuld
- [ ] Clarity: onder Settings › Setup › Advanced settings Masking op Strict zetten

## Zweedse en Franse versie (volgen na de plaatsnaampagina's)
- [x] Zweeds en Frans: contact in het Engels of Nederlands (besluit Frans)

## Duitse versie
- [x] Talen bouwbedrijf: Nederlands, Engels en Spaans. Duitse, Zweedse en Franse pagina's zeggen dat het contact in het Engels of Nederlands gaat.
- [ ] Het gekozen bouwbedrijf: bevestigen welke diensten het zelf doet (o.a. nieuwe zwembaden, aankoopkeuring, buitenkeukens, airco/warmtepomp)
- [ ] Projectfoto's van het gekozen bouwbedrijf (met toestemming), met plaats per project
- [ ] Duitse titels en teksten bij projecten (`titleDe`, `summaryDe`, `durationDe`) en teamleden (`roleDe`, `bioDe`)
- [ ] Impressum op /de/datenschutz/ laten nakijken (gegevens van Frans' onderneming en het bouwbedrijf)
