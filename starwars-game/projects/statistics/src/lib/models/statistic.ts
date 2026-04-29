/**
 * Contract representing a statistic for a given month and year, including the number of successes and failures.
 */
export interface Statistic {
  year: number;
  month: number;
  nbSuccesses: number;
  nbFails: number;
}

export type Statistics = Statistic[];

export type StatisticWithPercentage = Statistic & {
  successPercentage: number;
};

export type StatisticWithoutMonth = Omit<Statistic, 'month'>;

