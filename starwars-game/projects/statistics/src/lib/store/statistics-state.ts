import { StatisticWithPercentage } from "../models/statistic";

export interface StatisticsState {
  items: StatisticWithPercentage[];
  loading: boolean;
  error?: unknown;
}

export const initialStatisticsState: StatisticsState = {
  items: [],
  loading: false,
}
