export type HairColor = 'blond' | 'brown';

export interface People {
  name: string;
  hairColor: string | HairColor;
}
