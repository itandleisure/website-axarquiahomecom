// Alle plaatsen van de Axarquía: de 31 gemeenten en de kernen die een eigen pagina krijgen.
// Golf A wordt eerst gebouwd, dan B, dan C (zie het plan "Opzet plaatsnaampagina's").
// Een plaats krijgt pas een link zodra `built` op true staat en de pagina's bestaan.
import type { Lang } from '../i18n';

export type Setting = 'coast' | 'hills' | 'mountains' | 'inland';

export interface Place {
  slug: string; // Spaanse naam zonder accenten, gelijk in alle talen
  name: string;
  kind: 'gemeente' | 'kern';
  /** Bij een kern: de slug van de gemeente waar hij onder valt */
  municipality?: string;
  setting: Setting;
  /** Ligt (een deel van) de gemeente aan zee? Ook bij gemeenten met een dorp in de heuvels. */
  coastal?: boolean;
  wave: 'A' | 'B' | 'C';
  /** Andere kernen of dorpen binnen de gemeente, alleen ter informatie */
  villages?: string[];
  built?: boolean;
}

export const places: Place[] = [
  // Golf A: gemeenten
  { slug: 'nerja', name: 'Nerja', kind: 'gemeente', setting: 'coast', coastal: true, wave: 'A', villages: ['Maro'], built: true },
  { slug: 'frigiliana', name: 'Frigiliana', kind: 'gemeente', setting: 'hills', wave: 'A', built: true },
  { slug: 'velez-malaga', name: 'Vélez-Málaga', kind: 'gemeente', setting: 'coast', coastal: true, wave: 'A', villages: ['Torre del Mar', 'Caleta de Vélez', 'Benajarafe', 'Almayate', 'Chilches', 'Lagos', 'Trapiche', 'Cajiz'], built: true },
  { slug: 'torrox', name: 'Torrox', kind: 'gemeente', setting: 'hills', coastal: true, wave: 'A', villages: ['Torrox Costa', 'El Morche'], built: true },
  { slug: 'competa', name: 'Cómpeta', kind: 'gemeente', setting: 'mountains', wave: 'A', built: true },
  { slug: 'rincon-de-la-victoria', name: 'Rincón de la Victoria', kind: 'gemeente', setting: 'coast', coastal: true, wave: 'A', villages: ['La Cala del Moral', 'Benagalbón', 'Torre de Benagalbón'], built: true },
  { slug: 'algarrobo', name: 'Algarrobo', kind: 'gemeente', setting: 'hills', coastal: true, wave: 'A', villages: ['Algarrobo Costa', 'Mezquitilla'], built: true },
  { slug: 'vinuela', name: 'Viñuela', kind: 'gemeente', setting: 'inland', wave: 'A', villages: ['Los Romanes', 'Los Gómez'], built: true },
  // Golf A: kernen met een eigen pagina
  { slug: 'maro', name: 'Maro', kind: 'kern', municipality: 'nerja', setting: 'coast', coastal: true, wave: 'A', built: true },
  { slug: 'torre-del-mar', name: 'Torre del Mar', kind: 'kern', municipality: 'velez-malaga', setting: 'coast', coastal: true, wave: 'A', built: true },
  { slug: 'caleta-de-velez', name: 'Caleta de Vélez', kind: 'kern', municipality: 'velez-malaga', setting: 'coast', coastal: true, wave: 'A', built: true },
  { slug: 'benajarafe', name: 'Benajarafe', kind: 'kern', municipality: 'velez-malaga', setting: 'coast', coastal: true, wave: 'A', built: true },
  { slug: 'torrox-costa', name: 'Torrox Costa', kind: 'kern', municipality: 'torrox', setting: 'coast', coastal: true, wave: 'A', built: true },
  { slug: 'la-cala-del-moral', name: 'La Cala del Moral', kind: 'kern', municipality: 'rincon-de-la-victoria', setting: 'coast', coastal: true, wave: 'A', built: true },
  // Golf B
  { slug: 'comares', name: 'Comares', kind: 'gemeente', setting: 'mountains', wave: 'B', built: true },
  { slug: 'canillas-de-aceituno', name: 'Canillas de Aceituno', kind: 'gemeente', setting: 'mountains', wave: 'B', built: true },
  { slug: 'sayalonga', name: 'Sayalonga', kind: 'gemeente', setting: 'hills', wave: 'B', villages: ['Corumbela'], built: true },
  { slug: 'periana', name: 'Periana', kind: 'gemeente', setting: 'inland', wave: 'B', villages: ['Mondrón', 'Guaro'], built: true },
  { slug: 'riogordo', name: 'Riogordo', kind: 'gemeente', setting: 'inland', wave: 'B', built: true },
  { slug: 'colmenar', name: 'Colmenar', kind: 'gemeente', setting: 'inland', wave: 'B', built: true },
  { slug: 'alcaucin', name: 'Alcaucín', kind: 'gemeente', setting: 'mountains', wave: 'B', villages: ['Puente Don Manuel'], built: true },
  { slug: 'canillas-de-albaida', name: 'Canillas de Albaida', kind: 'gemeente', setting: 'mountains', wave: 'B', built: true },
  { slug: 'archez', name: 'Árchez', kind: 'gemeente', setting: 'mountains', wave: 'B', built: true },
  { slug: 'sedella', name: 'Sedella', kind: 'gemeente', setting: 'mountains', wave: 'B', built: true },
  // Golf C
  { slug: 'salares', name: 'Salares', kind: 'gemeente', setting: 'mountains', wave: 'C' },
  { slug: 'arenas', name: 'Arenas', kind: 'gemeente', setting: 'hills', wave: 'C', villages: ['Daimalos'] },
  { slug: 'benamocarra', name: 'Benamocarra', kind: 'gemeente', setting: 'hills', wave: 'C' },
  { slug: 'benamargosa', name: 'Benamargosa', kind: 'gemeente', setting: 'hills', wave: 'C' },
  { slug: 'almachar', name: 'Almáchar', kind: 'gemeente', setting: 'hills', wave: 'C' },
  { slug: 'el-borge', name: 'El Borge', kind: 'gemeente', setting: 'hills', wave: 'C' },
  { slug: 'cutar', name: 'Cútar', kind: 'gemeente', setting: 'hills', wave: 'C' },
  { slug: 'iznate', name: 'Iznate', kind: 'gemeente', setting: 'hills', wave: 'C' },
  { slug: 'macharaviaya', name: 'Macharaviaya', kind: 'gemeente', setting: 'hills', wave: 'C' },
  { slug: 'moclinejo', name: 'Moclinejo', kind: 'gemeente', setting: 'hills', wave: 'C' },
  { slug: 'totalan', name: 'Totalán', kind: 'gemeente', setting: 'hills', wave: 'C' },
  { slug: 'alfarnate', name: 'Alfarnate', kind: 'gemeente', setting: 'inland', wave: 'C' },
  { slug: 'alfarnatejo', name: 'Alfarnatejo', kind: 'gemeente', setting: 'inland', wave: 'C' },
];

export type PlacePage = 'overview' | 'see' | 'living';
export const placeSub: Record<Exclude<PlacePage, 'overview'>, Record<Lang, string>> = {
  see: { nl: 'zien-en-doen', en: 'things-to-do', de: 'sehenswuerdigkeiten' },
  living: { nl: 'wonen', en: 'living', de: 'wohnen' },
};
export const placeBase: Record<Lang, string> = { nl: '/nl/plaatsen/', en: '/en/places/', de: '/de/orte/' };
export const placeHref = (lang: Lang, p: Place, page: PlacePage = 'overview') =>
  `${placeBase[lang]}${p.slug}/${page === 'overview' ? '' : `${placeSub[page][lang]}/`}`;
export const placeBySlug = (slug: string) => places.find((p) => p.slug === slug);

export const settingLabels: Record<Lang, Record<Setting, string>> = {
  nl: { coast: 'Aan de kust', hills: 'In de heuvels', mountains: 'In de bergen', inland: 'In het binnenland' },
  en: { coast: 'On the coast', hills: 'In the hills', mountains: 'In the mountains', inland: 'Inland' },
  de: { coast: 'An der Küste', hills: 'In den Hügeln', mountains: 'In den Bergen', inland: 'Im Hinterland' },
};
