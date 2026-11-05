import { t, P, R, W, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Viñuela bestaat uit drie dorpen rond het stuwmeer: Viñuela, Los Romanes en Los Gómez. Elk heeft zijn eigen zomerferia, en samen trekken ze in mei naar het meer.',
    'Viñuela is made up of three villages around the reservoir: Viñuela, Los Romanes and Los Gómez. Each has its own summer fair, and in May they head to the lake together.',
    'Viñuela besteht aus drei Dörfern rund um den Stausee: Viñuela, Los Romanes und Los Gómez. Jedes hat seine eigene Sommer-Feria, und im Mai ziehen sie gemeinsam zum See.',
    'Viñuela består av tre byar runt sjön: Viñuela, Los Romanes och Los Gómez. Varje by har sin egen sommarferia, och i maj drar de tillsammans till sjön.',
  ),
  events: [
    { name: 'San José', when: R(19, 3), text: t('feest van de beschermheilige.', 'the patron saint’s day.', 'Fest des Schutzpatrons.', 'skyddshelgonets dag.') },
    { name: 'Romería', when: P('end', 5), highlight: true, kind: 'romeria', text: t('sinds 1991 trekken de drie dorpen samen naar de oever van het meer.', 'since 1991 the three villages have made a joint pilgrimage to the lakeside.', 'seit 1991 ziehen die drei Dörfer gemeinsam ans Seeufer.', 'sedan 1991 vallfärdar de tre byarna tillsammans till sjöstranden.') },
    { name: 'Feria de Los Gómez', when: P('mid', 7), kind: 'feria', text: t('het zomerfeest van Los Gómez.', 'the summer fair of Los Gómez.', 'das Sommerfest von Los Gómez.', 'sommarfesten i Los Gómez.') },
    { name: 'Feria de Viñuela', when: W(7.5, t('eind juli of begin augustus', 'late July or early August', 'Ende Juli oder Anfang August', 'slutet av juli eller början av augusti')), kind: 'feria', text: t('het zomerfeest van het hoofddorp.', 'the summer fair of the main village.', 'das Sommerfest des Hauptortes.', 'sommarfesten i huvudbyn.') },
    { name: 'Feria de Los Romanes', when: P('mid', 8), kind: 'feria', text: t('het zomerfeest van Los Romanes.', 'the summer fair of Los Romanes.', 'das Sommerfest von Los Romanes.', 'sommarfesten i Los Romanes.') },
    { name: 'Fiesta de la Pasa', when: W(9.5, t('eind september of begin oktober', 'late September or early October', 'Ende September oder Anfang Oktober', 'slutet av september eller början av oktober')), text: t('het feest van de rozijnenoogst.', 'the raisin harvest festival.', 'das Fest der Rosinenernte.', 'russinskördens fest.') },
  ],
  sources: ['https://es.hispanopedia.com/wiki/La_Viñuela', 'https://mivelezmalaga.com/whats-on/whats-on-october-axarquia/'],
};
export default f;
