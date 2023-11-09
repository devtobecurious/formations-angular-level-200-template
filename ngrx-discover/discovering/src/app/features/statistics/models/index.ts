/**
 * Statistic
 */
export interface Statistic {
  annee: number;
  mois: number;
  nbPartiesGagnees: number;
  nbPartiesPerdues: number;
}

export type Statistics = Statistic[];
