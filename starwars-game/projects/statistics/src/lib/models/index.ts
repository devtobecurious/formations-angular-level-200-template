export interface Statistic {
  annee: number,
  mois: number,
  nbGagnees: number,
  nbPerdues: number,
}

export type Statistics = Statistic[];

export interface StatisticListState {
  items: Statistics | undefined,
  state: 'draft' | 'loading' | 'loaded' | 'onError'
}

