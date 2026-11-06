import { t, D, E, N, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Algarrobo heeft een dorp in de heuvels en een kustdeel met Algarrobo Costa en Mezquitilla. Het bijzonderste feest is de Quema de Algarrobo in september, die een gebeurtenis uit 1811 naspeelt.',
    'Algarrobo has a village in the hills and a coastal part with Algarrobo Costa and Mezquitilla. Its most unusual fiesta is the Quema de Algarrobo in September, which re-enacts an event from 1811.',
    'Algarrobo hat ein Dorf in den Hügeln und einen Küstenteil mit Algarrobo Costa und Mezquitilla. Das besonderste Fest ist die Quema de Algarrobo im September, die ein Ereignis von 1811 nachstellt.',
    'Algarrobo har en by i kullarna och en kustdel med Algarrobo Costa och Mezquitilla. Den mest speciella festen är Quema de Algarrobo i september, som spelar upp en händelse från 1811.',
  ),
  events: [
    { name: 'San Sebastián', when: D(20, 1), text: t('feest van de beschermheilige, met ’s avonds een processie en vuurwerk.', 'the patron saint’s day, with a procession and fireworks in the evening.', 'Fest des Schutzpatrons, abends mit Prozession und Feuerwerk.', 'skyddshelgonets dag, med procession och fyrverkeri på kvällen.') },
    { name: 'Semana Santa', when: E('holy-week'), kind: 'semana-santa', text: t('processies door de straatjes van het dorp.', 'processions through the village lanes.', 'Prozessionen durch die Gassen des Dorfes.', 'processioner genom byns gränder.') },
    { name: 'Feria de Algarrobo', when: N(1, 'week', 8), kind: 'feria', text: t('het zomerfeest, van donderdag tot zondag.', 'the summer fair, from Thursday to Sunday.', 'das Sommerfest, von Donnerstag bis Sonntag.', 'sommarfesten, från torsdag till söndag.') },
    { name: 'Quema de Algarrobo', when: N(3, 'weekend', 9), highlight: true, text: t(
      'een naspel, met vuur en muziek, van wat het dorp op 23 en 24 september 1811 meemaakte in de oorlog tegen de troepen van Napoleon.',
      'a re-enactment, with fire and music, of what the village went through on 23 and 24 September 1811 in the war against Napoleon’s troops.',
      'eine Nachstellung mit Feuer und Musik dessen, was das Dorf am 23. und 24. September 1811 im Krieg gegen Napoleons Truppen erlebte.',
      'en återskapning, med eld och musik, av vad byn var med om den 23–24 september 1811 i kriget mot Napoleons trupper.',
    ) },
  ],
  sources: ['https://es.wikipedia.org/wiki/Algarrobo_(Málaga)'],
};
export default f;
