// Gemeentelijke gegevens per gemeente: belastingtarieven en het gemeentehuis.
// Gebruikt voor de pagina's Bouwvergunning en Praktisch wonen per gemeente (src/components/MunicipalPage.astro).
//
// Bronnen (geraadpleegd 5 november 2026):
// - Tarieven: Ministerio de Hacienda, "Consulta de información impositiva municipal", provincie Málaga, jaar 2026
//   https://serviciostelematicosext.hacienda.gob.es/SGFAL/ConsultaTipos/html/portadaconsultasm.aspx
//   ibiUrban/ibiRustic = tipo de gravamen IBI urbana/rústica (%), catastro = jaar van de laatste algemene herziening
//   van de catastrale waarden, icio = tipo ICIO (%), plusvalia = tipo IIVTNU (%; 0 = niet opgegeven).
//   Alle 31 gemeenten hadden in 2025 dezelfde tarieven, behalve Rincón de la Victoria (IBI urbana 0,68 → 0,67).
// - Gemeentehuis: Ministerio de Hacienda, Base de Datos General de Entidades Locales (BDGEL), datos generales.
//   Aangevuld vanaf de eigen website voor Canillas de Albaida en Sayalonga, en voor Árchez uit een gemeentelijk
//   bericht uit 2020 (addressChecked: false). Voor Arenas staat geen adres in de BDGEL.
// - Regels voor vergunningen: Ley 7/2021 LISTA (Andalusië), art. 137, 138, 140 en 141 (BOE-A-2021-20916).
// - Belasting niet-residenten: Ley 35/2006 IRPF, art. 85 en DA 55ª (1,1% bij herziening vanaf 2012, anders 2%).
//
// Controleer de tarieven elk jaar in januari met de nieuwe gegevens van Hacienda en zet `checked` bij.

export const municipalChecked = '2026-11-05';
export const municipalTaxYear = 2026;

export interface Municipal {
  /** INE-code van de gemeente */
  ine: string;
  /** Officiële naam van het gemeentehuis, alleen nodig als die afwijkt van de plaatsnaam */
  ayuntamiento?: string;
  ibiUrban: number;
  ibiRustic: number;
  /** Jaar waarin de laatste algemene herziening van de catastrale waarden inging */
  catastro: number;
  icio: number;
  /** Tarief plusvalía municipal; 0 = niet opgegeven bij Hacienda */
  plusvalia: number;
  address?: string;
  postcode: string;
  phone?: string;
  web: string;
  /** false = adres of telefoon komt niet uit de BDGEL en is minder zeker */
  addressChecked?: boolean;
}

export const municipal: Record<string, Municipal> = {
  'alcaucin': { ine: '29002', ibiUrban: 0.6, ibiRustic: 0.6, catastro: 2000, icio: 3.4, plusvalia: 30, address: 'Plaza de la Constitución 1', postcode: '29711', phone: '952 51 00 02', web: 'alcaucin.es' },
  'alfarnate': { ine: '29003', ibiUrban: 0.55, ibiRustic: 0.8, catastro: 2009, icio: 2.4, plusvalia: 16, address: 'Plaza de la Constitución 1', postcode: '29194', phone: '952 75 90 28', web: 'alfarnate.es' },
  'alfarnatejo': { ine: '29004', ibiUrban: 0.75, ibiRustic: 0.75, catastro: 2006, icio: 2, plusvalia: 0, address: 'Calle Pósito 2', postcode: '29194', phone: '952 75 92 86', web: 'alfarnatejo.es' },
  'algarrobo': { ine: '29005', ibiUrban: 0.87, ibiRustic: 0.77, catastro: 2003, icio: 2.55, plusvalia: 30, address: 'Calle Antonio Ruiz Rivas 2', postcode: '29750', phone: '952 55 24 77', web: 'algarrobo.es' },
  'almachar': { ine: '29009', ibiUrban: 0.55, ibiRustic: 0.7, catastro: 2008, icio: 2.4, plusvalia: 30, address: 'Calle Almería 14', postcode: '29718', phone: '952 51 20 02', web: 'almachar.es' },
  'archez': { ine: '29016', ibiUrban: 0.6, ibiRustic: 0.65, catastro: 2007, icio: 2.4, plusvalia: 0, address: 'Paseo del Río Turvilla s/n', postcode: '29753', phone: '952 55 31 59', web: 'archez.es', addressChecked: false },
  'arenas': { ine: '29019', ibiUrban: 0.45, ibiRustic: 0.75, catastro: 2009, icio: 4, plusvalia: 10, postcode: '29717', web: 'arenas.es' },
  'benamargosa': { ine: '29026', ibiUrban: 0.5824, ibiRustic: 0.5, catastro: 2009, icio: 2.5, plusvalia: 30, address: 'Plaza del Ayuntamiento 2', postcode: '29718', phone: '952 51 70 02', web: 'benamargosa.es' },
  'benamocarra': { ine: '29027', ibiUrban: 0.55, ibiRustic: 0.85, catastro: 2007, icio: 2, plusvalia: 30, address: 'Calle Zarzuela 38', postcode: '29719', phone: '952 50 95 34', web: 'benamocarra.es' },
  'el-borge': { ine: '29030', ibiUrban: 0.6, ibiRustic: 0.8, catastro: 2008, icio: 2.4, plusvalia: 30, address: 'Plaza de la Constitución 1', postcode: '29718', phone: '952 51 20 33', web: 'elborge.es' },
  'canillas-de-aceituno': { ine: '29033', ibiUrban: 0.45, ibiRustic: 0.75, catastro: 2007, icio: 4, plusvalia: 0, address: 'Plaza de la Constitución 22', postcode: '29716', phone: '952 51 80 02', web: 'canillasdeaceituno.es' },
  'canillas-de-albaida': { ine: '29034', ibiUrban: 0.55, ibiRustic: 0.8, catastro: 2007, icio: 3.5, plusvalia: 0, address: 'Plaza Nuestra Señora del Rosario', postcode: '29755', phone: '952 55 30 06', web: 'canillasdealbaida.es' },
  'colmenar': { ine: '29043', ibiUrban: 0.5, ibiRustic: 0.67, catastro: 2011, icio: 3.5, plusvalia: 28, address: 'Plaza de España 7', postcode: '29170', phone: '952 73 00 00', web: 'colmenar.es' },
  'comares': { ine: '29044', ibiUrban: 0.54, ibiRustic: 0.68, catastro: 2008, icio: 4, plusvalia: 20, address: 'Plaza Balcón de la Axarquía 1', postcode: '29195', phone: '952 50 92 33', web: 'comares.es' },
  'competa': { ine: '29045', ibiUrban: 0.4, ibiRustic: 0.6, catastro: 2008, icio: 2.4, plusvalia: 26, address: 'Calle Rampa 1', postcode: '29754', phone: '952 51 60 06', web: 'competa.es' },
  'cutar': { ine: '29050', ibiUrban: 0.624, ibiRustic: 0.5, catastro: 2009, icio: 2.5, plusvalia: 16, address: 'Calle Fuente 7', postcode: '29718', phone: '952 55 42 47', web: 'cutar.es' },
  'frigiliana': { ine: '29053', ibiUrban: 0.6, ibiRustic: 0.45, catastro: 2003, icio: 2.4, plusvalia: 29, address: 'Calle Real 80', postcode: '29788', phone: '952 53 32 59', web: 'frigiliana.es' },
  'iznate': { ine: '29062', ibiUrban: 0.45, ibiRustic: 0.55, catastro: 2006, icio: 2, plusvalia: 0, address: 'Calle Vélez 20', postcode: '29792', phone: '952 50 97 76', web: 'iznate.es' },
  'macharaviaya': { ine: '29066', ibiUrban: 0.59, ibiRustic: 0.65, catastro: 2008, icio: 2, plusvalia: 0, address: 'Plaza Matías de Gálvez 2', postcode: '29791', phone: '952 40 00 42', web: 'macharaviaya.es' },
  'moclinejo': { ine: '29071', ibiUrban: 0.65, ibiRustic: 0.78, catastro: 2008, icio: 2.5, plusvalia: 0, address: 'Plaza de España 1', postcode: '29738', phone: '952 40 05 86', web: 'moclinejo.es' },
  'nerja': { ine: '29075', ibiUrban: 0.461, ibiRustic: 0.3, catastro: 2003, icio: 3.8, plusvalia: 21, address: 'Calle Carmen 1', postcode: '29780', phone: '952 54 84 00', web: 'nerja.es' },
  'periana': { ine: '29079', ibiUrban: 0.65, ibiRustic: 0.65, catastro: 2000, icio: 2.4, plusvalia: 0, address: 'Plaza de Andalucía 1', postcode: '29710', phone: '952 53 60 16', web: 'periana.es' },
  'rincon-de-la-victoria': { ine: '29082', ibiUrban: 0.67, ibiRustic: 0.84, catastro: 2014, icio: 3.78, plusvalia: 30, address: 'Plaza Al-Andalus 1', postcode: '29730', phone: '952 40 23 00', web: 'rincondelavictoria.es' },
  'riogordo': { ine: '29083', ibiUrban: 0.4, ibiRustic: 0.8, catastro: 2007, icio: 3, plusvalia: 30, address: 'Plaza de la Constitución 14', postcode: '29180', phone: '952 73 21 54', web: 'riogordo.es' },
  'salares': { ine: '29085', ibiUrban: 0.55, ibiRustic: 0.8, catastro: 2007, icio: 2.4, plusvalia: 0, address: 'Plaza de la Mezquita 2', postcode: '29714', phone: '952 50 89 03', web: 'salares.es' },
  'sayalonga': { ine: '29086', ibiUrban: 0.65, ibiRustic: 0.65, catastro: 2007, icio: 3.5, plusvalia: 20, address: 'Plaza Rafael Alcoba 20', postcode: '29752', phone: '952 53 50 21', web: 'sayalonga.es' },
  'sedella': { ine: '29087', ibiUrban: 0.5, ibiRustic: 0.5, catastro: 2008, icio: 2.4, plusvalia: 10, address: 'Calle Andalucía 11', postcode: '29715', phone: '952 50 88 39', web: 'sedella.es' },
  'torrox': { ine: '29091', ibiUrban: 0.63, ibiRustic: 0.63, catastro: 2013, icio: 3.2, plusvalia: 25, address: 'Plaza de la Constitución 1', postcode: '29770', phone: '952 53 88 62', web: 'torrox.es' },
  'totalan': { ine: '29092', ibiUrban: 0.65, ibiRustic: 0.65, catastro: 2009, icio: 3.1, plusvalia: 26, address: 'Calle del Real 28', postcode: '29197', phone: '952 40 02 15', web: 'totalan.es' },
  'velez-malaga': { ine: '29094', ibiUrban: 0.64, ibiRustic: 0.6, catastro: 2008, icio: 3.5, plusvalia: 29, address: 'Plaza de las Carmelitas 1', postcode: '29700', phone: '952 55 91 00', web: 'velezmalaga.es' },
  'vinuela': { ine: '29099', ibiUrban: 0.65, ibiRustic: 0.75, catastro: 2006, icio: 3, plusvalia: 18, address: 'Calle Granada 13', postcode: '29712', phone: '952 51 93 24', web: 'lavinuela.es' },
};

/** Gemeente bij een plaats: de plaats zelf of, bij een kern, de gemeente waar hij onder valt. */
export const municipalSlugFor = (p: { slug: string; municipality?: string }) => (municipal[p.slug] ? p.slug : p.municipality && municipal[p.municipality] ? p.municipality : undefined);

/** Percentage voor de imputatie van inkomen bij niet-residenten (IRPF art. 85, DA 55ª voor 2023-2026). */
export const imputationRate = (m: Municipal) => (m.catastro >= 2012 ? 1.1 : 2);

// Gemiddelde van de regio, voor de vergelijking op de pagina
const all = Object.values(municipal);
export const icioRange = { min: Math.min(...all.map((m) => m.icio)), max: Math.max(...all.map((m) => m.icio)) };
export const ibiRange = { min: Math.min(...all.map((m) => m.ibiUrban)), max: Math.max(...all.map((m) => m.ibiUrban)) };
