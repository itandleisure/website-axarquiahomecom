// Projecten voor de pagina /nl/projecten/.
// Foto's in public/projecten/ zetten en hier het pad invullen, bijv. '/projecten/competa-voor.jpg'.
export interface Project {
  title: string;
  place: string;
  budget: string; // bijv. '€ 40.000 – € 60.000'
  duration: string; // bijv. '4 maanden'
  summary: string;
  titleEn?: string;
  summaryEn?: string;
  durationEn?: string; // bijv. '4 months'
  titleDe?: string;
  summaryDe?: string;
  durationDe?: string; // bijv. '4 Monate'
  titleSv?: string;
  summarySv?: string;
  durationSv?: string; // bijv. '4 månader'
  titleEs?: string;
  summaryEs?: string;
  durationEs?: string; // bijv. '4 meses'
  before?: string;
  after?: string;
}

export const projects: Project[] = [
  // Voorbeeld:
  // {
  //   title: 'Dorpshuis volledig gerenoveerd',
  //   place: 'Cómpeta',
  //   budget: '€ 60.000 – € 80.000',
  //   duration: '5 maanden',
  //   summary: 'Nieuwe leidingen en elektra, badkamer, keuken en dakterras.',
  //   before: '/projecten/competa-voor.jpg',
  //   after: '/projecten/competa-na.jpg',
  // },
];
