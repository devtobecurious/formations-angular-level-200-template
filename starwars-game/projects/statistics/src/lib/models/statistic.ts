export interface Statistic {
  year: number;
  month: number;
  nbSuccess: number;
  nbFailures: number;
}

export type StatisticList = Statistic[]
