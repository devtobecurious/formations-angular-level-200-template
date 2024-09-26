/**
 * Mes stats
 */
export interface Statistic {
  id: number;
  year: number;
  month: number;
  nbSucess: number;
  nbFailed: number;
}

export type CreateStatistic = Omit<Statistic, 'id'>;

export type NonRequired = Partial<Statistic>;
//export type TypeOrNonExists<T extends { id : number }> = T | null | undefined;
export type TypeOrNonExists<T> = T | null | undefined;
// export type StatisticOrNonExists = Statistic | undefined | null;
export type StatisticOrNonExists = TypeOrNonExists<Statistic>;

export type Statistics = Statistic[];
