import type { Topic } from './types';

// DIY guides in English: how to tackle a job yourself, what to choose, where to buy materials,
// which permit you need and when it is better to call in a professional.
export const diyEn: Topic[] = [
  {
    key: 'zwembad',
    slug: 'building-your-own-swimming-pool',
    title: 'Building your own swimming pool in Spain: every step',
    seoTitle: 'Build your own swimming pool in Spain: steps and permits',
    short: 'Build your own pool',
    description: 'Building a pool yourself in the Axarquía? The steps from permit to filling, which type you can build yourself and what the materials cost.',
    lead: 'A pool is the dream of almost every homeowner in the Axarquía, and you can do a good part of the work yourself. But underestimate the permit or the digging and you pay for it twice.',
    keyword: 'diy swimming pool spain',
    dienst: 'zwembad',
    onderwerp: 'I want to build a pool and am looking for help with (part of) the work.',
    answer: 'An <strong>above-ground pool</strong> you can install entirely yourself. An in-ground pool built from <strong>concrete blocks with a liner</strong>, or a <strong>prefabricated fibreglass shell</strong>, you can largely build yourself if you hand over the digging, the electrics and, where needed, the crane. Every in-ground pool in Andalusia needs a <strong>building permit with a project</strong>.',
    sections: [
      {
        id: 'allowed',
        h: 'First: can you have a pool here?',
        html: `<p>Do not start digging until you know. An in-ground pool in Andalusia is an <em>obra mayor</em>: you apply to the town hall for a building permit (<em>licencia de obra</em>), with a project drawn up by an architect or technical engineer. Watch out for three things:</p>
<ul>
<li><strong>Type of land.</strong> On rural land (<em>suelo rústico</em>) the rules are stricter than in a residential area. Ask the ayuntamiento what is allowed on your plot.</li>
<li><strong>The status of your house.</strong> If your house has AFO status or no full licence, you are often not allowed to add anything. Read our guide to <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a> first.</li>
<li><strong>Water.</strong> An 8 × 4 metre pool holds 40 to 50 m³ of water. In dry years, towns in the Axarquía have restricted or banned filling pools. Ask before you build, and expect to use a water tanker (<em>camión cisterna</em>) for the first fill.</li>
</ul>
<p>How it works in your town: see for example <a href="/en/places/competa/building-permit/">building permits in Cómpeta</a> or <a href="/en/places/nerja/building-permit/">in Nerja</a>.</p>`,
      },
      {
        id: 'choose',
        h: 'Which pool can you build yourself?',
        table: {
          head: ['Type', 'DIY?'],
          rows: [
            ['Steel or resin above-ground pool on a concrete slab', 'Entirely'],
            ['Concrete block kit (<em>bloques de encofrado</em>) with liner', 'Mostly; hand over digging and electrics'],
            ['Concrete blocks with gresite mosaic', 'Yes, with bricklaying and tiling experience'],
            ['Prefabricated fibreglass shell', 'Partly: digging and placing with a crane'],
            ['Sprayed concrete (gunite)', 'No, needs a specialist company'],
          ],
        },
        after: '<p>On a finca with a narrow mountain track a fibreglass shell is often not an option: the lorry and the crane cannot get there. A block pool can be built anywhere, because everything arrives in small pieces.</p>',
      },
      {
        id: 'steps',
        h: 'Step by step',
        html: `<ol>
<li><strong>Location and design.</strong> Choose a spot with afternoon sun, out of the wind and with access for a mini digger. Keep your distance from the boundary; your town hall sets how far.</li>
<li><strong>Permit.</strong> Have the project drawn up and apply for the permit. Allow a few weeks to a few months.</li>
<li><strong>Setting out and digging.</strong> Hire a mini digger with driver, or do it yourself if you have experience. Arrange beforehand where the soil goes; removing it costs money. If you hit rock, you will need a breaker.</li>
<li><strong>Floor.</strong> A layer of gravel with a reinforced concrete slab on top, sloping towards the main drain.</li>
<li><strong>Walls.</strong> Stack the blocks with reinforcing bars and fill them with concrete. Check every course with a spirit level.</li>
<li><strong>Pipework.</strong> Skimmers, main drain, return inlets and the pipes to the plant room. Pressure-test before you cover the pipes.</li>
<li><strong>Finish.</strong> A liner, or render with gresite mosaic.</li>
<li><strong>Equipment.</strong> Pump, sand (or glass) filter and possibly a salt chlorinator. Have the electrics connected by an authorised electrician (<em>instalador autorizado</em>), who also issues the certificate.</li>
<li><strong>Edge and terrace.</strong> Lay the coping stones (<em>coronación</em>), backfill around the pool and lay the terrace.</li>
<li><strong>Fill and balance.</strong> Fill the pool, start the filter and bring the water to the right pH and chlorine or salt level.</li>
</ol>`,
      },
      {
        id: 'buy',
        h: 'Where to buy the materials',
        html: `<ul>
<li><strong>Kits and above-ground pools</strong>: at the large DIY stores in Málaga and from online suppliers in Spain, who will also deliver up a mountain track if you tell them beforehand.</li>
<li><strong>Blocks, concrete, reinforcement and gravel</strong>: from a builders’ merchant (<em>almacén de materiales de construcción</em>) in Vélez-Málaga, Torre del Mar or Nerja. They deliver with small lorries, including to the villages.</li>
<li><strong>Pump, filter, liner and chemicals</strong>: from a pool shop (<em>tienda de piscinas</em>), which can also advise on the size of pump.</li>
<li><strong>Mini digger or cement mixer</strong>: from a plant hire company (<em>alquiler de maquinaria</em>).</li>
</ul>`,
      },
      {
        id: 'pro',
        h: 'When is a professional the better choice?',
        html: `<ul>
<li>The pool goes on a slope and needs a retaining wall.</li>
<li>The ground is rock or the site is hard to reach.</li>
<li>You want sprayed concrete, an overflow edge or an unusual shape.</li>
<li>The electrics and the certificate: only an authorised electrician may do this.</li>
<li>You are not in Spain yourself to follow the work.</li>
</ul>
<p>Many owners choose a middle way: the professional does the digging, the shell and the equipment, and you do the terrace and finishing yourself.</p>`,
      },
    ],
    faq: [
      { q: 'Do I need a permit for an above-ground pool?', a: 'An above-ground pool you can take down again usually does not need a building permit. An in-ground or partly sunken pool, or a permanent concrete slab, usually does. Check with the ayuntamiento.' },
      { q: 'Can I do part of it myself and have the rest done?', a: 'Yes, and many owners do. We can do the digging, the shell and the equipment, for example, while you lay the terrace and do the finishing yourself. Tell us what you want to do yourself and we will plan the rest around it.' },
      { q: 'How long does it take to build a pool yourself?', a: 'Apart from the permit, allow four to ten weekends or two to four weeks full time, depending on your experience and the ground.' },
    ],
    links: [
      { href: '/en/swimming-pool/', label: 'Swimming pools: building and maintenance' },
      { href: '/en/costs/building-a-swimming-pool/', label: 'What does it cost to have a pool built?' },
      { href: '/en/guides/afo-legalisation-andalusia/', label: 'Guide: AFO and legalisation' },
      { href: '/en/problems/legionella/', label: 'Legionella in pools and pipes' },
    ],
    related: ['costs:zwembad', 'diy:dak', 'problems:legionella'],
    sources: [
      { name: 'Junta de Andalucía, Ley 7/2021 de impulso para la sostenibilidad del territorio (LISTA)', url: 'https://www.juntadeandalucia.es/boja/2021/233/1' },
      { name: 'Código Técnico de la Edificación (CTE)', url: 'https://www.codigotecnico.org/' },
      { name: 'Reglamento electrotécnico para baja tensión (REBT)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099' },
    ],
    ctaTitle: 'Rather have (part of) it done?',
    ctaText: 'Would you like the pool built, in full or in part? We help you make it happen, from permit to first swim.',
    minutes: 7,
    published: '2026-11-05',
  },
  {
    key: 'dak',
    slug: 'repairing-or-replacing-your-roof',
    title: 'Repairing or replacing a roof in Spain: what you can do yourself',
    seoTitle: 'DIY roof repair in Spain: tiles and roof terraces',
    short: 'DIY roof repair',
    description: 'Replacing roof tiles, waterproofing a roof terrace or a new roof? What you can do yourself, which materials to choose and when to call a professional.',
    lead: 'Most roof leaks in the Axarquía start small: a slipped tile, a blocked outlet or a cracked layer on the roof terrace. You can fix many of them yourself, as long as you work safely.',
    keyword: 'roof repair spain',
    dienst: 'onderhoud',
    onderwerp: 'I would like my roof or roof terrace repaired or renewed.',
    answer: '<strong>Replacing a broken tile</strong>, <strong>clearing gutters and outlets</strong> and <strong>recoating a roof terrace</strong> with liquid rubber you can do yourself. Replacing beams or a roof slab, raising the roof or a completely new roof is work for a professional and needs a permit. Never touch a roof of <strong>uralita</strong> (asbestos cement) yourself.',
    sections: [
      {
        id: 'which-roof',
        h: 'What kind of roof do you have?',
        table: {
          head: ['Roof', 'How to recognise it', 'Watch out for'],
          rows: [
            ['Pitched roof with curved tiles (<em>teja árabe</em>)', 'Red or brown curved tiles, often bedded in mortar', 'Tiles shift with wind and heat; the layer underneath is often old'],
            ['Flat roof or roof terrace (<em>azotea</em>)', 'Tiled or coated, with outlets in the corners', 'Usually leaks at joints, edges and outlets'],
            ['Corrugated sheets of <em>uralita</em>', 'Grey corrugated sheets, often on outbuildings', 'Almost always contains asbestos: only a registered company may remove it'],
          ],
        },
      },
      {
        id: 'diy',
        h: 'What can you do yourself?',
        table: {
          head: ['Job', 'DIY?'],
          rows: [
            ['Clear gutters and outlets', 'Yes, every autumn'],
            ['Replace a broken or slipped tile', 'Yes'],
            ['Seal joints and flashings', 'Yes'],
            ['Recoat a roof terrace with liquid rubber (<em>membrana líquida</em>)', 'Yes'],
            ['Re-tile part of the roof', 'With experience'],
            ['Renew beams, roof slab or the whole roof', 'No'],
          ],
        },
      },
      {
        id: 'roof-terrace',
        h: 'How to waterproof a roof terrace',
        html: `<ol>
<li>Sweep and rinse the terrace and let it dry completely.</li>
<li>Remove loose coating and mortar and fill cracks with repair mortar or sealant.</li>
<li>Clear the outlets and check the water actually runs towards them.</li>
<li>Apply a primer, following the instructions for the coating.</li>
<li>Bed reinforcing mesh (<em>malla</em>) into the first coat at corners, edges and joints.</li>
<li>Apply at least two coats, crosswise, with drying time in between.</li>
</ol>
<p>Work in spring or autumn: in full summer sun the coating dries too quickly, and in winter the risk of rain is too high. If there are tiles on the terrace you want to keep, there is a clear coating, but it is less durable. If the tiles have to come up, the job is for a professional.</p>`,
      },
      {
        id: 'safety',
        h: 'Working safely on the roof',
        html: `<ul>
<li>Never work alone, and never in wind or after rain.</li>
<li>Use a harness with an anchor point on a pitched roof, and a ladder that reaches at least a metre above the edge.</li>
<li>Do not walk on old tiles without a board: they break, and the structure underneath is sometimes weaker than you think.</li>
<li>If a ladder, scaffold or skip goes on the street, you need a permit to use the public road (<em>ocupación de la vía pública</em>).</li>
</ul>`,
      },
      {
        id: 'permit',
        h: 'Permit',
        html: '<p>Repairs with the same materials are usually minor works (<em>obra menor</em>), with a notification (<em>declaración responsable</em>) to the town hall. If you change the structure, the height or the shape of the roof, it is an <em>obra mayor</em> with a project by an architect. In the historic centres of villages such as Frigiliana or Cómpeta there are often rules on the type and colour of the tiles.</p>',
      },
      {
        id: 'pro',
        h: 'When is a professional the better choice?',
        html: `<ul>
<li>The ceiling sags, the beams are cracked, or there is woodworm or termites.</li>
<li>It leaks even though the tiles or the coating look fine: the problem is underneath.</li>
<li>The whole roof needs renewing, with insulation.</li>
<li>There is uralita or other asbestos on the roof.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'When is the best time to work on the roof?', a: 'Spring and autumn. In July and August a roof gets too hot to work on safely and coatings dry too quickly. Check the roof every autumn, before the October and November rains.' },
      { q: 'Can I reuse old tiles?', a: 'Yes, and in historic centres that is often preferred. Old teja árabe is sought after and sometimes costs more than new. Use the whole tiles for the top layer and the lesser ones for the bottom layer.' },
      { q: 'Can I remove uralita myself?', a: 'No. In Spain asbestos may only be removed by a company on the register for asbestos work (RERA). Leave it until it is done professionally.' },
    ],
    links: [
      { href: '/en/problems/roof-leaks/', label: 'Roof leaks: cause and solution' },
      { href: '/en/guides/asbestos-uralita-roof-spain/', label: 'Guide: asbestos and uralita roofs' },
      { href: '/en/costs/roof-and-roof-terrace/', label: 'What does a new roof or roof terrace cost?' },
      { href: '/en/maintenance/', label: 'Maintenance and repairs' },
    ],
    related: ['problems:daklekkage', 'costs:dak', 'diy:witten'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HS 1 protection against damp', url: 'https://www.codigotecnico.org/' },
      { name: 'Real Decreto 396/2006 on work with asbestos', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2006-6474' },
    ],
    ctaTitle: 'Leaking roof, or does it need replacing?',
    ctaText: 'Does the roof need repairing or renewing? We take care of it for you, even if you are not in Spain yourself.',
    minutes: 7,
    published: '2026-11-05',
  },
  {
    key: 'ramen',
    slug: 'replacing-windows',
    title: 'Replacing windows in Spain: what to choose and how to fit them yourself',
    seoTitle: 'Replacing windows yourself in Spain: glazing and fitting',
    short: 'Replacing windows',
    description: 'New windows in the Axarquía? Aluminium or uPVC, which glass, sliding or tilt-and-turn, how to measure and fit them and which permit you need.',
    lead: 'Old single-glazed windows let the cold in during winter and the heat in during summer. New windows are one of the best improvements you can make to a Spanish house, and if you are handy you can fit them yourself.',
    keyword: 'replacing windows spain',
    dienst: 'renovatie',
    onderwerp: 'I would like my windows replaced.',
    answer: 'Most owners in the Axarquía choose <strong>thermally broken aluminium</strong> (<em>RPT</em>) or <strong>uPVC</strong>, with <strong>double glazing</strong> and solar control glass on the south and west sides. You have them made to measure by a local <em>carpintería</em>, and you can fit them yourself if the opening stays the same.',
    sections: [
      {
        id: 'material',
        h: 'Aluminium, uPVC or wood?',
        table: {
          head: ['Material', 'Pros', 'Cons'],
          rows: [
            ['Thermally broken aluminium (RPT)', 'Strong, slim frame, stands up to sun and sea air, many colours', 'Slightly less insulating than uPVC'],
            ['uPVC', 'Best insulation, cheaper', 'Dark colours can warp in strong sun; thicker frame'],
            ['Wood', 'Beautiful and suits old houses', 'A lot of maintenance in sun and rain; more expensive'],
          ],
        },
      },
      {
        id: 'glass',
        h: 'Glass, opening and extras',
        html: `<ul>
<li><strong>Double glazing</strong> (<em>doble acristalamiento</em>, often called <em>Climalit</em> in Spain) is the standard. On the south and west sides choose solar control glass (<em>control solar</em>), on the north side low-e glass (<em>bajo emisivo</em>).</li>
<li><strong>Safety glass</strong> (<em>laminado</em>) on the ground floor and for full-height doors.</li>
<li><strong>Tilt-and-turn</strong> (<em>oscilobatiente</em>) seals and insulates best. <strong>Sliding windows</strong> (<em>correderas</em>) take up no space but let in more draughts and dust.</li>
<li><strong>Extras</strong>: roller shutters (<em>persianas</em>), shutters (<em>contraventanas</em> or <em>mallorquinas</em>), fly screens (<em>mosquiteras</em>) and grilles (<em>rejas</em>) for houses that are empty for long periods.</li>
</ul>`,
      },
      {
        id: 'measure',
        h: 'How to measure',
        html: `<ol>
<li>Measure the width of the opening at three heights and the height at three points.</li>
<li>Take the smallest measurement each time and deduct about 1 cm for the gap all round.</li>
<li>Check the opening is square by measuring the diagonals. A difference of more than a centimetre you take up in the finishing.</li>
<li>Note the opening direction, where the shutter box goes and whether you need a sill.</li>
</ol>
<p>If in doubt, let the carpintería measure. It costs little or nothing, and then they are responsible for the size.</p>`,
      },
      {
        id: 'fitting',
        h: 'Fitting step by step',
        html: `<ol>
<li>Take out the old sashes. Remove the old frame, or leave it and fit a renovation frame over it. That saves cutting and plastering, but the glass gets slightly smaller.</li>
<li>Clean and level the opening.</li>
<li>Set the new frame on packers, level and square.</li>
<li>Fix it with frame screws or anchors into the wall, without bending the frame.</li>
<li>Fill the gap all round with PU foam and trim it once cured.</li>
<li>Seal the outside with a weatherproof sealant (MS polymer) and finish the inside with a trim or plaster.</li>
<li>Rehang the sashes and adjust the hinges and locks.</li>
</ol>`,
      },
      {
        id: 'buy',
        h: 'Where to buy windows',
        html: '<p>Made-to-measure windows come from a local aluminium or uPVC workshop (<em>carpintería de aluminio</em> or <em>de PVC</em>). There are workshops in Vélez-Málaga, Torre del Mar, Nerja and many villages. Ask for two or three quotes and ask for the brand and series of the frame and the type of glass, so you can compare. Standard-size windows are available at the DIY stores in Málaga, but old Spanish houses rarely have standard sizes.</p>',
      },
      {
        id: 'permit',
        h: 'Permit',
        html: '<p>Replacing windows in the same opening is usually minor works, with a notification (<em>declaración responsable</em>) to the town hall. In the historic centre of many white villages there are rules on colour, style and material, for example wood or a wood colour. Check before you order. Making an opening bigger or putting a new window in a wall affects the structure, so you need a professional and a permit.</p>',
      },
    ],
    faq: [
      { q: 'How long do made-to-measure windows take?', a: 'Usually two to four weeks after measuring. In spring, when many people get their house ready for summer, it can take longer.' },
      { q: 'Will new windows solve damp and mould?', a: 'They reduce draughts and cold spots, but a well-sealed house needs more ventilation. Without ventilation, condensation can actually increase. Read more about damp and mould.' },
      { q: 'Can I fit windows myself without experience?', a: 'Replacing a window in an existing opening is quite doable if you are handy. A large sliding door or windows high up are better fitted by two professionals: they are heavy and must fit exactly.' },
    ],
    links: [
      { href: '/en/renovation/', label: 'Renovation and building work' },
      { href: '/en/problems/damp-and-mould/', label: 'Damp and mould in the house' },
      { href: '/en/maintenance/', label: 'Maintenance and repairs' },
    ],
    related: ['diy:kachel', 'problems:vocht', 'costs:airco'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HE energy saving', url: 'https://www.codigotecnico.org/' },
    ],
    ctaTitle: 'Rather have the windows fitted?',
    ctaText: 'Would you like new windows fitted? We arrange it for you, from measuring to fitting.',
    minutes: 7,
    published: '2026-11-05',
  },
  {
    key: 'kachel',
    slug: 'installing-a-wood-burner-and-flue',
    title: 'Installing a wood burner and flue in Spain: how to do it yourself',
    seoTitle: 'Installing a wood burner in Spain: stove, flue and rules',
    short: 'Installing a wood burner',
    description: 'A wood or pellet stove in the Axarquía? Which stove to choose, how to fit the flue and roof outlet, where to buy firewood and what to arrange.',
    lead: 'Winter evenings in the mountains of the Axarquía are colder than many people expect, and most old houses have no heating. A good stove makes all the difference.',
    keyword: 'wood burner spain',
    dienst: 'renovatie',
    onderwerp: 'I would like a wood burner or pellet stove installed.',
    answer: 'You can fit a <strong>wood burner</strong> or <strong>fireplace insert</strong> yourself if you use an <strong>insulated twin-wall flue</strong>, keep to the manufacturer’s clearances and make the roof outlet properly watertight. Keep the invoices and have the installation checked: your insurer may ask.',
    sections: [
      {
        id: 'choose',
        h: 'Which stove to choose',
        table: {
          head: ['Type', 'Suits'],
          rows: [
            ['Wood burner (<em>estufa de leña</em>)', 'Living room, house without reliable power, the feel of a real fire'],
            ['Fireplace insert (<em>insert</em> or <em>cassette</em>)', 'An existing open fire that mostly heats the sky'],
            ['Pellet stove (<em>estufa de pellets</em>)', 'Convenience: thermostat, timer, remote start'],
          ],
        },
        after: '<p>An open fire mainly heats the chimney: up to 80% of the heat is lost. An insert in the same fireplace gives three to four times more heat from the same wood.</p>',
      },
      {
        id: 'flue',
        h: 'The flue',
        html: `<ul>
<li>Use single-wall pipe inside the room, and <strong>insulated twin-wall stainless steel</strong> (<em>tubo de doble pared</em>) from the ceiling, through the roof and outside.</li>
<li>Keep the clearance to wood, beams and reed (<em>cañizo</em>) the manufacturer specifies. Use a ceiling plate where you pass through the ceiling and roof.</li>
<li>Let the flue rise at least a metre above the roof, and above the ridge if it is close to it. Too short a flue is the main reason a stove draws badly.</li>
<li>Use as few bends as possible, never more than two.</li>
<li>If you use an existing chimney, have it swept and checked first. A stainless steel liner is often needed.</li>
</ul>`,
      },
      {
        id: 'steps',
        h: 'Step by step',
        html: `<ol>
<li>Choose the spot: in the middle of the house spreads the heat best, and the flue must be able to go straight up.</li>
<li>Lay a non-combustible hearth of stone, tile or steel under and in front of the stove.</li>
<li>Make the hole in the ceiling and roof, with the clearance to wood the instructions require.</li>
<li>Fit the flue from the bottom up, with the joints arranged so condensation runs inwards.</li>
<li>Make the roof outlet watertight with a lead flashing or flexible flashing and sealant, and lay the tiles neatly around it.</li>
<li>Make sure there is an air supply to the room, especially in a house with new windows.</li>
<li>Fit a carbon monoxide alarm and run the stove gently the first time.</li>
</ol>`,
      },
      {
        id: 'wood',
        h: 'Where to buy a stove and firewood',
        html: '<p>Stoves and flue pipe are available at the DIY stores in Málaga and from stove shops in the area, which can also supply the flue to measure. Firewood comes from local suppliers (<em>venta de leña</em>): olive and almond wood burn long and hot. Buy in spring so it is dry by winter. Pellets are sold by the bag or pallet at DIY stores, farmers’ cooperatives and some petrol stations.</p>',
      },
      {
        id: 'rules',
        h: 'Permit, insurance and maintenance',
        html: `<ul>
<li>A stove with a flue through the roof is minor works in most towns, with a notification (<em>declaración responsable</em>). In an apartment you also need permission from the owners’ association (<em>comunidad</em>) for a flue on the façade or through the roof.</li>
<li>Tell your insurer about the stove. After a fire they will often ask for invoices and who installed it.</li>
<li>Have the flue swept every year, before the heating season.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Is a wood burner enough to heat my house?', a: 'For the living room and the rooms around it, yes. A house over several floors or with separate rooms will not get fully warm with it. Many owners combine a stove with heat-pump air conditioning for the bedrooms.' },
      { q: 'Can I use the stove in summer?', a: 'Indoors, yes. But lighting fires outdoors and burning garden waste is banned in and near woodland in Andalusia from June to mid-October. The stove itself is not covered by this, but watch for sparks from the chimney in dry weather.' },
      { q: 'Why does my stove smoke back?', a: 'Usually the flue is too short, has too many bends or there is too little air coming into the room. Wet wood and a dirty flue also cause smoke. Start with dry wood and a window slightly open.' },
    ],
    links: [
      { href: '/en/renovation/', label: 'Renovation and building work' },
      { href: '/en/costs/air-conditioning-and-heat-pumps/', label: 'What does air con or a heat pump cost?' },
      { href: '/en/maintenance/', label: 'Maintenance and repairs' },
    ],
    related: ['diy:ramen', 'diy:dak', 'costs:airco'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HS 3 indoor air quality', url: 'https://www.codigotecnico.org/' },
      { name: 'Junta de Andalucía, Plan INFOCA: fire prevention and restricted period', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/incendios-forestales' },
    ],
    ctaTitle: 'Rather have the stove installed?',
    ctaText: 'Would you like a stove installed? We take care of the stove, the flue and a safe installation.',
    minutes: 6,
    published: '2026-11-05',
  },
  {
    key: 'witten',
    slug: 'limewashing-your-house',
    title: 'Limewashing your house: how it is done in Andalusia',
    seoTitle: 'Limewashing a house in Spain: materials and steps',
    short: 'Limewashing',
    description: 'Whitewash your walls like the white villages? Lime or masonry paint, how to apply it, what the town hall requires and how to prevent damp.',
    lead: 'The white villages owe their colour to lime. Limewashing (<em>encalar</em>) is one of the easiest jobs to do yourself, and it keeps old walls healthy.',
    keyword: 'limewash house spain',
    dienst: 'onderhoud',
    onderwerp: 'I would like my façade limewashed or painted.',
    answer: 'For old walls of stone and lime mortar choose <strong>lime</strong> (<em>cal</em>): it breathes, so moisture can get out. Masonry paint traps moisture and then peels. Apply three or four <strong>thin coats</strong> to a damp wall, not in full sun. Lime is also the cheapest option.',
    sections: [
      {
        id: 'choose',
        h: 'Lime or masonry paint?',
        table: {
          head: ['', 'Lime (<em>cal</em>)', 'Masonry paint (<em>pintura plástica</em> or <em>elástica</em>)'],
          rows: [
            ['Suits', 'Old walls of stone, earth and lime mortar', 'New walls of brick and cement'],
            ['Moisture', 'Breathes: moisture can get out', 'Seals: moisture stays behind the paint'],
            ['Durability', 'A new coat every one to three years', 'Five to ten years'],
          ],
        },
        after: '<p>If an old wall already has masonry paint on it and it is peeling, remove as much as you can before limewashing. Lime does not bond well to paint.</p>',
      },
      {
        id: 'steps',
        h: 'Step by step',
        html: `<ol>
<li>Brush loose lime, dirt and moss off the wall with a wire brush.</li>
<li>Repair cracks and holes with lime mortar, not cement.</li>
<li>Wet the wall with a sprayer or garden hose. On a dry wall the lime dries too fast and you get streaks and fine cracks.</li>
<li>Mix the lime putty (<em>cal en pasta</em>) with water until it is as thin as full-fat milk.</li>
<li>Apply a thin coat with a wide brush (<em>brocha</em>) or roller, crosswise.</li>
<li>Let each coat dry for a day and dampen the wall again before the next. After three or four coats the wall is evenly white.</li>
</ol>
<p>Work in spring or autumn, or in the shade early in the morning. In full sun and strong wind lime dries too fast and turns powdery.</p>`,
      },
      {
        id: 'safety',
        h: 'Working safely with lime',
        html: '<p>Lime is caustic. Wear safety glasses, gloves and long sleeves, and rinse splashes on skin or in eyes straight away with plenty of water. Cover windows, doors and plants. Use slaked lime (<em>cal apagada</em>), not quicklime (<em>cal viva</em>), which gets hot when you add water.</p>',
      },
      {
        id: 'buy',
        h: 'Where to buy lime',
        html: '<p>Lime putty and lime powder are sold at every builders’ merchant (<em>almacén de materiales</em>) and hardware shop (<em>ferretería</em>) in the Axarquía, and at the DIY stores in Málaga. You can buy brushes and extension poles there too. For walls near the sea there is lime with additives that stands up better to salt and rain.</p>',
      },
      {
        id: 'rules',
        h: 'What does the town hall require?',
        html: '<p>In many villages in the Axarquía white is compulsory, and sometimes the colour of doors, windows and trims too. Limewashing a façade in the same colour is usually minor works. If you put scaffolding, a ladder or a skip on the street, you need a permit to use the public road. Check both with the ayuntamiento.</p>',
      },
      {
        id: 'pro',
        h: 'When is a professional the better choice?',
        html: `<ul>
<li>The wall has damp patches that keep coming back after limewashing: find the cause first, see <a href="/en/problems/damp-and-mould/">damp and mould</a>.</li>
<li>Cracks run through the wall and are getting wider: see <a href="/en/problems/cracks-in-walls/">cracks in walls</a>.</li>
<li>The façade is high and you need scaffolding.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Can I use lime indoors too?', a: 'Yes. Lime indoors discourages mould and suits old walls. It does bond poorly to walls that have been painted with emulsion before.' },
      { q: 'How often do I need to limewash?', a: 'A façade exposed to sun and rain every one to three years. Many owners in the villages limewash every spring, before the summer and the fiestas.' },
      { q: 'Can I paint my house a different colour?', a: 'In historic centres usually not. Outside them there is often more freedom, but even then the town hall sometimes has rules. Check before you start.' },
    ],
    links: [
      { href: '/en/problems/damp-and-mould/', label: 'Damp and mould in the house' },
      { href: '/en/problems/cracks-in-walls/', label: 'Cracks in walls' },
      { href: '/en/maintenance/', label: 'Maintenance and repairs' },
    ],
    related: ['problems:vocht', 'problems:scheuren', 'diy:dak'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HS 1 protection against damp', url: 'https://www.codigotecnico.org/' },
    ],
    ctaTitle: 'Rather have the façade limewashed?',
    ctaText: 'Would you like the façade repaired and limewashed? We do it for you, however high it is.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'watertank',
    slug: 'installing-a-water-tank',
    title: 'Installing and connecting a water tank at your finca',
    seoTitle: 'Installing a water tank in Spain: connection and water',
    short: 'Installing a water tank',
    description: 'A water tank (depósito or aljibe) at your finca? Where your water comes from, what to check in a water contract and how to install and connect the tank.',
    lead: 'Many houses outside the villages of the Axarquía are not on mains water. They get water from a comunidad de regantes or a water tanker, or have their own well. Your own water tank is then the heart of the house.',
    keyword: 'water tank finca spain',
    dienst: 'onderhoud',
    onderwerp: 'I would like a water tank installed and connected.',
    answer: 'A <strong>water tank</strong> (<em>depósito</em> or <em>aljibe</em>) stores the water you receive, and a <strong>pressure pump</strong> takes it to the taps. Outside the village you often sign a <strong>contract for a fixed amount of water per week</strong>, for example with the comunidad de regantes. A <strong>float valve</strong> stops the supply once the tank is full. If you have <strong>your own well</strong>, you do not need such a contract. Water that does not come from the mains you make drinkable with <strong>filters and a UV lamp</strong>.',
    sections: [
      {
        id: 'sources',
        h: 'Where does your water come from?',
        table: {
          head: ['Source', 'How it works', 'Watch out for'],
          rows: [
            ['Town mains', 'Connection with a meter; the tank is then only a reserve', 'Only in and around the villages and in residential areas'],
            ['Comunidad de regantes (irrigation water)', 'You sign a contract for an amount per week; the water arrives at set times (<em>turno</em>) through a meter into your tank', 'Meant for farming, not drinking water; in dry years the amount can be cut'],
            ['Water tanker (<em>camión cisterna</em>)', 'You order a load of water when the tank runs low', 'The tanker must be able to reach the tank'],
            ['Own well or spring (<em>pozo</em>)', 'A pump draws the water and fills the tank', 'No contract needed, but registration or a licence is; have the water tested'],
            ['Rainwater', 'Collected from the roof into an old or new <em>aljibe</em>', 'A good extra, not enough in summer'],
          ],
        },
      },
      {
        id: 'contract',
        h: 'What to check in a water contract',
        html: `<p>How it works differs per comunidad and per area. Sometimes it is a lot of water, sometimes very little. Make sure you are clear on these points before you start:</p>
<ul>
<li><strong>How much water</strong> you get per week, and whether you can take more later. Allow 100 to 150 litres per person per day for a household, plus the garden and any pool.</li>
<li><strong>When</strong> the water comes: a set day and time (<em>turno</em>), or continuously.</li>
<li><strong>What happens in a drought</strong>: in 2023 and 2024 many users in the Axarquía received less water. Ask how this is handled.</li>
<li><strong>Who maintains the pipe</strong> up to your tank, and where the meter (<em>contador</em>) is.</li>
<li><strong>When buying a finca</strong>: is the water right attached to the plot, and will it be transferred to your name? Check with the comunidad and your lawyer. See also our guide to <a href="/en/guides/buying-a-finca-in-spain/">buying a finca in Spain</a>.</li>
</ul>`,
      },
      {
        id: 'stop',
        h: 'A stop on the tank',
        html: `<p>Without a stop the tank overflows at every delivery, or water keeps running that you do pay for. So you fit a stop:</p>
<ul>
<li>A <strong>float valve</strong> (<em>válvula de boya</em> or <em>flotador</em>) closes the supply as soon as the tank is full.</li>
<li>A <strong>stopcock</strong> on the supply, so you can shut the tank off when you are away or cleaning it.</li>
<li>An <strong>overflow</strong> draining away from the house, in case the float ever sticks.</li>
</ul>`,
      },
      {
        id: 'choose',
        h: 'Which tank to choose',
        table: {
          head: ['Type', 'Suits', 'Watch out for'],
          rows: [
            ['Plastic tank (polyethylene), above ground', 'Quick to install, even in hard-to-reach places', 'Choose a dark, opaque tank against algae, approved for drinking water (<em>apto uso alimentario</em>)'],
            ['Plastic tank, buried', 'Out of sight, water stays cool', 'Digging; the tank must be designed to be buried'],
            ['Masonry or concrete <em>aljibe</em>', 'Large storage, traditional on fincas', 'Often already there; have an old aljibe checked and re-waterproofed'],
          ],
        },
        after: '<p>Size the tank on what you use between two deliveries, plus a reserve for a week without water. For a couple without a pool a few thousand litres is often enough; with a garden, guests or rentals you soon need ten to twenty thousand litres.</p>',
      },
      {
        id: 'steps',
        h: 'Installing and connecting, step by step',
        html: `<ol>
<li><strong>Location.</strong> Higher than the house gives some pressure for free; lower works too, with a pressure pump. Make sure the supplier or tanker can get there.</li>
<li><strong>Base.</strong> A level, reinforced concrete slab. Every 1,000 litres weighs 1,000 kilos.</li>
<li><strong>Supply.</strong> Connect the pipe from the meter to the tank, with a stopcock and float valve.</li>
<li><strong>Overflow and vent.</strong> An overflow with a drain and a vent with an insect screen.</li>
<li><strong>Outlet.</strong> A stopcock, a non-return valve and a suction pipe to the pump.</li>
<li><strong>Pressure pump.</strong> A pump with a pressure vessel or a variable-speed pump, in a dry, shaded housing. Have the power connected by an authorised electrician.</li>
<li><strong>Filters.</strong> A sediment filter before the house, and for drinking water a carbon filter and a UV lamp.</li>
<li><strong>Pipes.</strong> Bury them or shield them from the sun; plastic pipes in the sun become brittle and the water gets warm.</li>
</ol>`,
      },
      {
        id: 'drinking-water',
        h: 'Drinking water from the tank',
        html: '<p>Water from a comunidad de regantes, a well or rain is not drinking water until it has been treated. Which filters you need depends on the source; usually a sediment filter, a carbon filter and a UV lamp. Have the water tested from time to time. Clean the tank every year and keep it closed and dark: still, warm water carries a risk of <a href="/en/problems/legionella/">legionella</a>.</p>',
      },
      {
        id: 'permit',
        h: 'Permit',
        html: '<p>Installing a plastic tank is usually minor works, with a notification (<em>declaración responsable</em>) to the town hall. A large masonry or concrete aljibe may need a building permit, especially on rural land. Drilling or using your own well must be registered with or licensed by the water authority of the Junta de Andalucía. Check before you start.</p>',
      },
    ],
    faq: [
      { q: 'How much water do I need per week?', a: 'Allow 100 to 150 litres per person per day indoors, so roughly 1,500 to 2,000 litres a week for two people. A garden, guests or a pool can multiply that, especially in summer.' },
      { q: 'Can I drink the water from the regantes?', a: 'Not as it comes. It is meant for farming and is not checked as drinking water. With filters and a UV lamp you can make it suitable, and have it tested from time to time.' },
      { q: 'Do I need a contract if I have my own well?', a: 'No, the water then comes from your own source. Many owners still have a tank as a buffer, so the pump does not keep cutting in and you have a supply when the well gives less in summer.' },
    ],
    links: [
      { href: '/en/guides/water-filters-spain/', label: 'Guide: water filters for tanks and wells' },
      { href: '/en/guides/water-leak-spain/', label: 'Guide: water leaks' },
      { href: '/en/guides/buying-a-finca-in-spain/', label: 'Guide: buying a finca in Spain' },
      { href: '/en/problems/legionella/', label: 'Legionella in tanks and pipes' },
      { href: '/en/key-holding/', label: 'Key holding: tank and pump checked while you are away' },
    ],
    related: ['costs:water', 'problems:legionella', 'diy:zwembad'],
    sources: [
      { name: 'Real Decreto Legislativo 1/2001, Ley de Aguas (incl. private wells)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-14276' },
      { name: 'Real Decreto 3/2023 on drinking water quality', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-628' },
    ],
    ctaTitle: 'Have a water tank installed?',
    ctaText: 'We install and connect the tank for you, with float valve, pump and filters, and help you sort out the water supply.',
    minutes: 7,
    published: '2026-11-05',
  },
];
