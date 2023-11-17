export interface Statistic {
  annee: number;
  mois: number;
  nbPartiesGagnees: number;
  nbPartiesPerdues: number;
}

export type Stats = Statistic[];
export type StatsOrUndefined = Stats | undefined;
