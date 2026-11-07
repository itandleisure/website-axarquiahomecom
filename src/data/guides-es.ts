// Spaanse gidsen. Het Spaans heeft (nog) niet alle gidsen, dus elke gids verwijst met `of`
// naar zijn tegenhanger: een Nederlandse gidsslug, of 'costs:<key>' voor een kostenpagina.
// Zo kloppen hreflang en de taalkeuze. Een `of` naar een gids die nog niet op main staat
// (bijv. uit een open PR) koppelt vanzelf zodra die gids er is.
// Zoekwoorden en volumes (Google Spanje): zie de lijst van Frans in de projectthread.
import type { GuideMeta } from './guides';

const published = '2026-11-07';

export const guidesEs: GuideMeta[] = [
  {
    of: 'costs:zonnepanelen',
    slug: 'placas-solares',
    title: 'Placas solares en la Axarquía: precios, ahorro y trámites',
    seoTitle: 'Placas solares en la Axarquía: precio y ahorro 2026',
    short: 'Placas solares',
    description: '¿Cuánto cuestan las placas solares en la Axarquía? Precios de 3 a 8 kWp, ahorro real, compensación de excedentes, licencia y bonificación del IBI.',
    lead: 'La Axarquía tiene más de 300 días de sol al año. Una instalación de autoconsumo bien dimensionada se paga sola en seis o siete años. Aquí tiene precios reales, un ejemplo de ahorro y los trámites paso a paso.',
    keyword: 'placas solares',
    minutes: 8,
    published,
  },
  {
    of: 'costs:thuisbatterij',
    slug: 'baterias-para-placas-solares',
    title: 'Baterías para placas solares: precio, capacidad y cuándo compensan',
    seoTitle: 'Baterías para placas solares: precio y si compensan',
    short: 'Baterías para placas solares',
    description: 'Precio de una batería para placas solares de 5, 10 y 15 kWh, cuándo compensa, respaldo ante apagones, dónde colocarla y qué ayudas hay en Andalucía.',
    lead: 'Desde el gran apagón del 28 de abril de 2025 muchos propietarios preguntan por una batería. ¿Cuánto cuesta, cuándo se amortiza y qué hay que tener en cuenta con el calor de la Axarquía?',
    keyword: 'baterias para placas solares',
    minutes: 7,
    published,
  },
  {
    of: 'subsidie-verduurzamen-spanje',
    slug: 'subvenciones-placas-solares',
    title: 'Subvenciones para placas solares en Andalucía (2026)',
    seoTitle: 'Subvenciones placas solares Andalucía 2026',
    short: 'Subvenciones placas solares',
    description: 'Qué ayudas quedan en 2026 para placas solares en la Axarquía: Junta de Andalucía con batería, deducción en el IRPF, bonificación del IBI e ICIO y CAE.',
    lead: 'Las ayudas Next Generation para viviendas ya se han cerrado, pero todavía hay dinero. La Junta subvenciona placas con batería, Hacienda deja deducir parte del coste y muchos ayuntamientos rebajan el IBI. Esto es lo que sigue abierto.',
    keyword: 'subvenciones placas solares',
    minutes: 8,
    published,
  },
  {
    of: 'costs:airco',
    slug: 'instalacion-aire-acondicionado',
    title: 'Instalación de aire acondicionado en la Axarquía: precios y consejos',
    seoTitle: 'Instalación de aire acondicionado: precio 2026',
    short: 'Aire acondicionado',
    description: '¿Cuánto cuesta instalar aire acondicionado? Precios de split, multisplit, conductos y aerotermia en la Axarquía, potencia contratada y cuándo pedirlo.',
    lead: 'En verano refresca y en invierno calienta: un buen equipo de aire acondicionado con bomba de calor es la forma más barata de climatizar una casa en la Axarquía. Esto es lo que cuesta instalarlo bien.',
    keyword: 'instalacion aire acondicionado',
    minutes: 7,
    published,
  },
  {
    of: 'energielabel-spanje',
    slug: 'certificado-energetico',
    title: 'Certificado energético: cuándo es obligatorio, precio y cómo mejorar la letra',
    seoTitle: 'Certificado energético: precio y cuándo es obligatorio',
    short: 'Certificado energético',
    description: 'Certificado de eficiencia energética en Andalucía: cuándo es obligatorio, cuánto cuesta, cuánto dura, cómo se tramita y qué obras mejoran más la calificación.',
    lead: 'Para vender o alquilar una vivienda necesita un certificado energético en vigor, y la letra tiene que aparecer ya en el anuncio. Le explicamos cómo se obtiene, lo que cuesta y qué obras suben la calificación.',
    keyword: 'certificado energetico',
    minutes: 6,
    published,
  },
  {
    of: 'ongedierte-bestrijden-spanje',
    slug: 'control-de-plagas',
    title: 'Control de plagas en casa: cucarachas, ratones, procesionaria y termitas',
    seoTitle: 'Control de plagas en casa: guía y precios',
    short: 'Control de plagas',
    description: 'Cucarachas, ratones, procesionaria, mosquito tigre y termitas en la Axarquía: qué hacer, precio de una empresa de control de plagas y cómo evitar que vuelvan.',
    lead: 'Eliminar una plaga es una cosa; que no vuelva es otra. Mientras la casa tenga entradas, las cucarachas y los ratones regresan. Esta guía explica qué plagas hay en la Axarquía, qué puede hacer usted y cuándo llamar a un profesional.',
    keyword: 'control de plagas',
    minutes: 8,
    published,
  },
];
