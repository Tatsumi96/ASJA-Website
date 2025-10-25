export type Level = 'L1' | 'L2' | 'L3' | 'M1' | 'M2';

export type Role = 'Student' | 'Admin';

export type Mention =
  | 'INFORMATIQUE'
  | 'DROIT'
  | 'AGRONOMIE'
  | 'ECONOMIE'
  | 'LANGUE ET CULTURE'
  | 'SCIENCE DE LA TERRE'
  | 'ASJA';

export type Branche =
  | 'GL'
  | 'GI'
  | 'TCO'
  | 'AFFAIRES'
  | 'PROCESSUEL'
  | 'HYDROGEOLOGIE'
  | 'GEOLOGIE MINIERE'
  | 'ECONOMIE ET DEVELOPPEMENT'
  | 'GESTION ET COMMERCE INTERNATIONAL'
  | 'AGROALIMENTAIRE'
  | 'PRODUCTION VEGETALE'
  | 'PRODUCTION ANIMAL'
  | 'COMMUN';

export const mentions: Record<string, string[]> = {
  INFORMATIQUE: ['GENIE LOGICIEL', 'TELECOMMUNICATION', 'GENIE INDUSTRIEL'],
  DROIT: ['PROCESSUEL', 'AFFAIRES'],
  ECONOMIE: ['GESTION ET COMMERCE INTERNATIONAL', 'ECONOMIE ET DEVELOPPEMENT'],
  AGRONOMIE: ['AGROALIMENTAIRE', 'PRODUCTION VEGETALE', 'PRODUCTION ANIMAL'],
  SCIENCE_DE_LA_TERRE: ['HYDROGEOLOGIE', 'GEOLOGIE MINIERE'],
  LANGUE_ET_CULTURE: [],
};

export const classes = ['L1', 'L2', 'L3', 'M1', 'M2'];

export type Tranche = 'Premier' | 'Deuxieme' | 'Troisieme';

export type Action = 'Creation' | 'Suppression' | 'Modification';
