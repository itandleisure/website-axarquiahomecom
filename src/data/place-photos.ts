// Foto's per plaats (stockfoto's uit Canva Pro, commercieel gebruik toegestaan; geen eigen projecten).
// Bestanden: public/images/plaatsen/<slug>/<naam>-<480|800|1200>.webp en een deelafbeelding
// van 1200 x 630 in public/images/og/<naam>.jpg.
// Per pagina: de eerste foto is de hero (en de og:image), de rest komt in een fotoreeks.
import type { Lang } from '../i18n';

export interface PlacePhoto {
  name: string;
  /** Spaans (es) is optioneel: er zijn nog geen Spaanse plaatspagina's. Zonder es valt de alt terug op het Engels. */
  alt: Record<Exclude<Lang, 'es'>, string> & { es?: string };
  /** Uitsnede in de hero (CSS object-position), standaard 'center' */
  focus?: string;
}
export type PhotoPage = 'overview' | 'see' | 'living' | 'fiestas' | 'weather';

interface PlacePhotoSet {
  photos: PlacePhoto[];
  pages: Partial<Record<PhotoPage, string[]>>;
}

export const photoWidths = [480, 800, 1200] as const;

const sets: Record<string, PlacePhotoSet> = {
  competa: {
    photos: [
      { name: 'competa-panorama-sierra-almijara', alt: {
        nl: 'De witte huizen van Cómpeta tegen de berghelling, met de bergen van de Sierra Almijara op de achtergrond',
        en: 'The white houses of Cómpeta on the hillside, with the Sierra Almijara mountains behind',
        de: 'Die weißen Häuser von Cómpeta am Hang, dahinter die Berge der Sierra Almijara',
        sv: 'De vita husen i Cómpeta på sluttningen, med bergen i Sierra Almijara i bakgrunden',
      } },
      { name: 'competa-kerktoren-dorp', alt: {
        nl: 'De kerktoren van Cómpeta tussen de witte huizen en dakterrassen van het dorp',
        en: 'The church tower of Cómpeta among the village’s white houses and roof terraces',
        de: 'Der Kirchturm von Cómpeta zwischen weißen Häusern und Dachterrassen',
        sv: 'Kyrktornet i Cómpeta bland byns vita hus och takterrasser',
      } },
      { name: 'competa-wit-straatje', alt: {
        nl: 'Rustig wit straatje in Cómpeta met smeedijzeren tralies en planten voor de deuren',
        en: 'Quiet whitewashed street in Cómpeta with wrought-iron window grilles and potted plants',
        de: 'Ruhige weiße Gasse in Cómpeta mit schmiedeeisernen Gittern und Topfpflanzen',
        sv: 'Lugn vitkalkad gränd i Cómpeta med smidesgaller och krukväxter',
      } },
    ],
    pages: {
      overview: ['competa-panorama-sierra-almijara', 'competa-kerktoren-dorp', 'competa-wit-straatje'],
      see: ['competa-kerktoren-dorp'],
      living: ['competa-wit-straatje'],
      fiestas: ['competa-kerktoren-dorp'],
      weather: ['competa-panorama-sierra-almijara'],
    },
  },
  'canillas-de-albaida': {
    photos: [
      { name: 'canillas-de-albaida-uitzicht-dal', alt: {
        nl: 'Uitzicht over de daken van Canillas de Albaida naar het groene dal en de bergen',
        en: 'View over the rooftops of Canillas de Albaida to the green valley and mountains',
        de: 'Blick über die Dächer von Canillas de Albaida auf das grüne Tal und die Berge',
        sv: 'Utsikt över taken i Canillas de Albaida mot den gröna dalen och bergen',
      } },
      { name: 'canillas-de-albaida-pleintje-kerk', alt: {
        nl: 'Pleintje in Canillas de Albaida met witte huizen, een terras en een kerk met bakstenen poort',
        en: 'Small square in Canillas de Albaida with white houses, a café terrace and a church with a brick doorway',
        de: 'Kleiner Platz in Canillas de Albaida mit weißen Häusern, Terrasse und einer Kirche mit Backsteinportal',
        sv: 'Litet torg i Canillas de Albaida med vita hus, en uteservering och en kyrka med tegelportal',
      } },
      { name: 'canillas-de-albaida-steegje-bloempotten', alt: {
        nl: 'Smal steegje met keienmozaïek en bloempotten aan de witte muren in Canillas de Albaida',
        en: 'Narrow cobbled alley with flower pots on the white walls in Canillas de Albaida',
        de: 'Schmale gepflasterte Gasse mit Blumentöpfen an weißen Wänden in Canillas de Albaida',
        sv: 'Smal kullerstensgränd med blomkrukor på de vita väggarna i Canillas de Albaida',
      } },
      { name: 'canillas-de-albaida-balkons-bloemen', alt: {
        nl: 'Balkons vol bloempotten met geraniums aan een witte gevel in Canillas de Albaida',
        en: 'Balconies full of geranium pots on a white façade in Canillas de Albaida',
        de: 'Balkone voller Geranientöpfe an einer weißen Fassade in Canillas de Albaida',
        sv: 'Balkonger fulla av pelargonkrukor på en vit fasad i Canillas de Albaida',
      } },
    ],
    pages: {
      overview: ['canillas-de-albaida-uitzicht-dal', 'canillas-de-albaida-pleintje-kerk', 'canillas-de-albaida-steegje-bloempotten', 'canillas-de-albaida-balkons-bloemen'],
      see: ['canillas-de-albaida-pleintje-kerk'],
      living: ['canillas-de-albaida-balkons-bloemen'],
      fiestas: ['canillas-de-albaida-steegje-bloempotten'],
    },
  },
  frigiliana: {
    photos: [
      { name: 'frigiliana-panorama-witte-dorp', alt: {
        nl: 'Frigiliana: het witte dorp ligt tegen de berghelling, boven tuinen en palmen',
        en: 'Frigiliana: the white village climbs the mountainside above gardens and palm trees',
        de: 'Frigiliana: das weiße Dorf am Berghang, oberhalb von Gärten und Palmen',
        sv: 'Frigiliana: den vita byn klättrar uppför bergssidan ovanför trädgårdar och palmer',
      } },
      { name: 'frigiliana-trappen-oude-wijk', alt: {
        nl: 'Trappenstraat in de oude wijk van Frigiliana met lantaarn, bougainville en een gevel met wapen',
        en: 'Stepped street in Frigiliana’s old quarter with a lantern, bougainvillea and a façade with a coat of arms',
        de: 'Treppengasse in der Altstadt von Frigiliana mit Laterne, Bougainvillea und Wappenfassade',
        sv: 'Trappgata i Frigilianas gamla kvarter med lykta, bougainvillea och en fasad med vapensköld',
      } },
      { name: 'frigiliana-blauwe-deuren', alt: {
        nl: 'Witte huisjes met lichtblauwe deuren en terracotta potten in Frigiliana',
        en: 'White houses with pale blue doors and terracotta pots in Frigiliana',
        de: 'Weiße Häuser mit hellblauen Türen und Terrakottatöpfen in Frigiliana',
        sv: 'Vita hus med ljusblå dörrar och terrakottakrukor i Frigiliana',
      } },
      { name: 'frigiliana-steegje-mozaiek', alt: {
        nl: 'Steil wit steegje met keienmozaïek en planten op de treden in Frigiliana',
        en: 'Steep white alley with pebble mosaic paving and plants on the steps in Frigiliana',
        de: 'Steile weiße Gasse mit Kieselmosaik und Pflanzen auf den Stufen in Frigiliana',
        sv: 'Brant vit gränd med mosaik av kiselsten och växter på trappstegen i Frigiliana',
      } },
      { name: 'frigiliana-winkelstraatje', alt: {
        nl: 'Winkelstraatje met lantaarns en bougainville in Frigiliana, met de groene heuvels erachter',
        en: 'Shopping street with lanterns and bougainvillea in Frigiliana, green hills behind',
        de: 'Ladenstraße mit Laternen und Bougainvillea in Frigiliana, dahinter grüne Hügel',
        sv: 'Shoppinggata med lyktor och bougainvillea i Frigiliana, gröna kullar i bakgrunden',
      } },
      { name: 'frigiliana-dorpsplein', alt: {
        nl: 'Zonnig plein met witte huizen en palmen aan de rand van het oude centrum van Frigiliana',
        en: 'Sunny square with white houses and palms at the edge of Frigiliana’s old centre',
        de: 'Sonniger Platz mit weißen Häusern und Palmen am Rand der Altstadt von Frigiliana',
        sv: 'Solig plats med vita hus och palmer i utkanten av Frigilianas gamla centrum',
      } },
    ],
    pages: {
      overview: ['frigiliana-panorama-witte-dorp', 'frigiliana-trappen-oude-wijk', 'frigiliana-blauwe-deuren', 'frigiliana-steegje-mozaiek'],
      see: ['frigiliana-winkelstraatje', 'frigiliana-trappen-oude-wijk', 'frigiliana-dorpsplein'],
      living: ['frigiliana-blauwe-deuren'],
      fiestas: ['frigiliana-dorpsplein'],
      weather: ['frigiliana-panorama-witte-dorp'],
    },
  },
  nerja: {
    photos: [
      { name: 'nerja-strand-kustlijn', alt: {
        nl: 'Strand in Nerja met strandparasols, een palmboom en de kliffen van de kust tot aan de horizon',
        en: 'Beach in Nerja with parasols, a palm tree and the cliffs of the coastline stretching to the horizon',
        de: 'Strand in Nerja mit Sonnenschirmen, einer Palme und der Steilküste bis zum Horizont',
        sv: 'Strand i Nerja med parasoller, en palm och klippkusten ända bort till horisonten',
      } },
      { name: 'nerja-grotten-cueva-de-nerja', alt: {
        nl: 'Wandelpad tussen de verlichte druipsteenformaties in de grotten van Nerja (Cueva de Nerja)',
        en: 'Walkway between the illuminated stalactites in the Caves of Nerja (Cueva de Nerja)',
        de: 'Weg zwischen beleuchteten Tropfsteinen in der Höhle von Nerja (Cueva de Nerja)',
        sv: 'Gångväg mellan upplysta droppstensformationer i grottorna i Nerja (Cueva de Nerja)',
      } },
      { name: 'nerja-uitkijkpunt-kliffen', alt: {
        nl: 'Uitkijkpunt op de rotsen boven zee in Nerja, met bezoekers en de bergen langs de kust',
        en: 'Viewpoint on the cliffs above the sea in Nerja, with visitors and the coastal mountains',
        de: 'Aussichtspunkt auf den Felsen über dem Meer in Nerja, mit Besuchern und den Küstenbergen',
        sv: 'Utsiktsplats på klipporna ovanför havet i Nerja, med besökare och bergen längs kusten',
      } },
      { name: 'nerja-baai-strand-kliffen', alt: {
        nl: 'Druk strandje in een baai onder de kliffen van Nerja, met helderblauw water',
        en: 'Busy little beach in a cove below the cliffs of Nerja, with clear blue water',
        de: 'Belebter kleiner Strand in einer Bucht unter den Klippen von Nerja, mit klarem blauem Wasser',
        sv: 'Välbesökt liten strand i en vik under klipporna i Nerja, med klart blått vatten',
      } },
      { name: 'nerja-palmen-boulevard', alt: {
        nl: 'Palmen, een lantaarn en een bankje aan de boulevard boven zee in Nerja bij laagstaande zon',
        en: 'Palm trees, a street lamp and a bench on the promenade above the sea in Nerja in low sunlight',
        de: 'Palmen, Laterne und Bank an der Promenade über dem Meer in Nerja bei tief stehender Sonne',
        sv: 'Palmer, en gatlykta och en bänk på strandpromenaden ovanför havet i Nerja i låg sol',
      } },
      { name: 'nerja-uitzicht-bougainville', alt: {
        nl: 'Uitzicht over Nerja en de kust met paarse bougainville op de voorgrond',
        en: 'View over Nerja and the coast with purple bougainvillea in the foreground',
        de: 'Blick über Nerja und die Küste mit lila Bougainvillea im Vordergrund',
        sv: 'Utsikt över Nerja och kusten med lila bougainvillea i förgrunden',
      } },
      { name: 'nerja-witte-huizen-zee', alt: {
        nl: 'Witte huizen tussen het groen in Nerja, met de zee in het tegenlicht',
        en: 'White houses among the greenery in Nerja, with the sea in backlight',
        de: 'Weiße Häuser im Grünen in Nerja, mit dem Meer im Gegenlicht',
        sv: 'Vita hus bland grönskan i Nerja, med havet i motljus',
      } },
    ],
    pages: {
      overview: ['nerja-strand-kustlijn', 'nerja-uitkijkpunt-kliffen', 'nerja-palmen-boulevard', 'nerja-witte-huizen-zee'],
      see: ['nerja-grotten-cueva-de-nerja', 'nerja-uitkijkpunt-kliffen', 'nerja-baai-strand-kliffen'],
      living: ['nerja-uitzicht-bougainville', 'nerja-witte-huizen-zee'],
      fiestas: ['nerja-palmen-boulevard'],
      weather: ['nerja-strand-kustlijn'],
    },
  },
  'torre-del-mar': {
    photos: [
      { name: 'torre-del-mar-strand-luchtfoto', alt: {
        nl: 'Luchtfoto van Torre del Mar: appartementen, de boulevard en het lange zandstrand, met de bergen erachter',
        en: 'Aerial view of Torre del Mar: apartment blocks, the promenade and the long sandy beach, mountains behind',
        de: 'Luftbild von Torre del Mar: Wohnhäuser, Promenade und der lange Sandstrand, dahinter die Berge',
        sv: 'Flygbild över Torre del Mar: lägenhetshus, strandpromenaden och den långa sandstranden, berg i bakgrunden',
      } },
      { name: 'torre-del-mar-vuurtoren', alt: {
        nl: 'De witte vuurtoren van Torre del Mar tussen de palmbomen onder een blauwe lucht',
        en: 'The white lighthouse of Torre del Mar between palm trees under a blue sky',
        de: 'Der weiße Leuchtturm von Torre del Mar zwischen Palmen unter blauem Himmel',
        sv: 'Den vita fyren i Torre del Mar mellan palmer under en blå himmel',
      } },
      { name: 'torre-del-mar-boulevard-luchtfoto', alt: {
        nl: 'Luchtfoto van de brede boulevard en de woonwijken van Torre del Mar langs het strand',
        en: 'Aerial view of the wide promenade and the residential streets of Torre del Mar along the beach',
        de: 'Luftbild der breiten Promenade und der Wohnviertel von Torre del Mar am Strand',
        sv: 'Flygbild över den breda strandpromenaden och bostadskvarteren i Torre del Mar längs stranden',
      } },
    ],
    pages: {
      overview: ['torre-del-mar-strand-luchtfoto', 'torre-del-mar-vuurtoren', 'torre-del-mar-boulevard-luchtfoto'],
      see: ['torre-del-mar-vuurtoren'],
      living: ['torre-del-mar-boulevard-luchtfoto'],
      weather: ['torre-del-mar-strand-luchtfoto'],
    },
  },
};

export interface ResolvedPhoto {
  alt: string;
  src: string;
  srcset: string;
  og: string;
  focus: string;
}

const resolve = (slug: string, p: PlacePhoto, lang: Lang): ResolvedPhoto => {
  const base = `/images/plaatsen/${slug}/${p.name}`;
  return {
    alt: p.alt[lang as Exclude<Lang, 'es'>] ?? p.alt.en,
    src: `${base}-800.webp`,
    srcset: photoWidths.map((w) => `${base}-${w}.webp ${w}w`).join(', '),
    og: `/images/og/${p.name}.jpg`,
    focus: p.focus ?? 'center',
  };
};

/** De foto's voor een pagina van een plaats: [hero, ...fotoreeks], of een lege lijst. */
export function photosFor(slug: string, page: PhotoPage, lang: Lang): ResolvedPhoto[] {
  const set = sets[slug];
  const names = set?.pages[page] ?? [];
  return names.map((n) => set!.photos.find((p) => p.name === n)).filter((p): p is PlacePhoto => !!p).map((p) => resolve(slug, p, lang));
}

