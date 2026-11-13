import { t, D, N, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Almáchar is het dorp van de ajoblanco, de koude amandelsoep. Die krijgt in september een eigen feestdag, erkend als fiesta van toeristisch belang in Andalusië.',
    'Almáchar is the village of ajoblanco, the cold almond soup. It gets its own festival day in September, recognised as a fiesta of tourist interest in Andalusia.',
    'Almáchar ist das Dorf des Ajoblanco, der kalten Mandelsuppe. Sie hat im September ihren eigenen Festtag, anerkannt als Fest von touristischem Interesse in Andalusien.',
    'Almáchar är ajoblancons by, den kalla mandelsoppan. Den har en egen festdag i september, erkänd som fest av turistiskt intresse i Andalusien.',
  ),
  events: [
    { name: 'Santo Cristo de la Banda Verde', when: N(1, 'weekend', 5), text: t('feest ter ere van de Christus van het dorp.', 'the fiesta in honour of the village’s Christ figure.', 'Fest zu Ehren des Christusbildes des Dorfes.', 'fest till ära för byns Kristusbild.') },
    { name: 'Romería de San Isidro', when: D(15, 5), kind: 'romeria', text: t('bedevaart met verdiales, de oude volksmuziek van de streek.', 'a pilgrimage with verdiales, the traditional folk music of the area.', 'Wallfahrt mit Verdiales, der alten Volksmusik der Gegend.', 'vallfärd med verdiales, traktens gamla folkmusik.') },
    { name: 'Nuestra Señora del Amparo', when: N(-1, 'weekend', 7), kind: 'feria', text: t('het zomerfeest ter ere van de beschermheilige.', 'the summer fiesta in honour of the patron saint.', 'das Sommerfest zu Ehren der Schutzpatronin.', 'sommarfesten till skyddshelgonets ära.') },
    { name: 'Día del Ajoblanco', when: N(1, 'saturday', 9), highlight: true, text: t('proeverij van ajoblanco met rozijnen en muziek op straat.', 'ajoblanco with raisins to taste, and music in the streets.', 'Ajoblanco mit Rosinen zum Probieren und Musik auf den Straßen.', 'ajoblanco med russin att smaka och musik på gatorna.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Almáchar'],
};
export default f;
