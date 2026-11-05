import { t, D, E, M, P, R, W, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Frigiliana viert het hele jaar door, maar het bekendste feest is het Festival Frigiliana 3 Culturas eind augustus, rond de joodse, islamitische en christelijke geschiedenis van het dorp.',
    'Frigiliana celebrates all year round, but its best-known fiesta is the Frigiliana 3 Cultures Festival in late August, built around the village’s Jewish, Muslim and Christian history.',
    'Frigiliana feiert das ganze Jahr, doch das bekannteste Fest ist das Festival Frigiliana 3 Culturas Ende August, rund um die jüdische, muslimische und christliche Geschichte des Dorfes.',
    'Frigiliana firar året runt, men den mest kända festen är Festival Frigiliana 3 Culturas i slutet av augusti, kring byns judiska, muslimska och kristna historia.',
  ),
  events: [
    { name: 'San Sebastián', when: D(20, 1), text: t('feest van de beschermheilige.', 'the patron saint’s day.', 'Fest des Schutzpatrons.', 'skyddshelgonets dag.') },
    { name: 'Carnaval', when: M(2), kind: 'carnaval', text: t('verkleden en muziek in de straatjes.', 'fancy dress and music in the lanes.', 'Verkleidung und Musik in den Gassen.', 'utklädnad och musik i gränderna.') },
    { name: 'Semana Santa', when: E('holy-week'), kind: 'semana-santa', text: t('processies op Witte Donderdag, Goede Vrijdag en Paaszondag, door de steile straatjes van het oude centrum.', 'processions on Maundy Thursday, Good Friday and Easter Sunday through the steep lanes of the old town.', 'Prozessionen an Gründonnerstag, Karfreitag und Ostersonntag durch die steilen Gassen der Altstadt.', 'processioner på skärtorsdagen, långfredagen och påskdagen genom gamla stadens branta gränder.') },
    { name: 'Día de la Miel de Caña', when: W(4.5, t('april of mei', 'April or May', 'April oder Mai', 'april eller maj')), text: t('feest van de rietsuikerstroop, die in Frigiliana nog wordt gemaakt.', 'a celebration of cane honey, which is still made in Frigiliana.', 'Fest des Zuckerrohrsirups, der in Frigiliana noch hergestellt wird.', 'fest för sockerrörssirapen, som fortfarande tillverkas i Frigiliana.') },
    { name: 'Día de la Cruz', when: D(3, 5), text: t('kruisen van bloemen in de straten.', 'crosses made of flowers in the streets.', 'Blumenkreuze in den Straßen.', 'blomsterkors på gatorna.') },
    { name: 'Feria de San Antonio', when: R(13, 6), kind: 'feria', text: t('de feria van het dorp, met een romería.', 'the village fair, with a romería.', 'die Feria des Dorfes, mit einer Romería.', 'byns feria, med romería.') },
    { name: 'Festival Frigiliana 3 Culturas', when: P('end', 8), highlight: true, text: t(
      'muziek, markten, eten en een tapasroute rond de joodse, islamitische en christelijke geschiedenis van het dorp.',
      'music, markets, food and a tapas trail built around the village’s Jewish, Muslim and Christian history.',
      'Musik, Märkte, Essen und eine Tapas-Route rund um die jüdische, muslimische und christliche Geschichte des Dorfes.',
      'musik, marknader, mat och en tapasrunda kring byns judiska, muslimska och kristna historia.',
    ) },
    { name: 'Halloween', when: D(31, 10), kind: 'halloween', text: t('de gemeente organiseert meestal activiteiten voor kinderen en families.', 'the town hall usually organises activities for children and families.', 'die Gemeinde organisiert meist Veranstaltungen für Kinder und Familien.', 'kommunen ordnar oftast aktiviteter för barn och familjer.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Frigiliana', 'https://euroweeklynews.com/2026/10/30/halloween-plans-change-axarquia-and-costa-tropical-events-moved/'],
};
export default f;
