// Teamleden voor /nl/over-ons/. Foto's in public/team/.
export interface Member { name: string; role: string; bio: string; roleEn?: string; bioEn?: string; roleDe?: string; bioDe?: string; roleSv?: string; bioSv?: string; photo?: string; }
export const team: Member[] = [
  // { name: 'Jan Jansen', role: 'Eigenaar en projectleider', bio: 'Woont sinds 2012 in Cómpeta…', photo: '/team/jan.jpg' },
];
