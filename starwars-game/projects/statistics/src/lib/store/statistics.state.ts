import { StatisticList } from "../models/statistic";

//1. Interface
export interface StatisticsState {
  items: StatisticList,
  isLoading: boolean,
  error?: unknown
}

//2. valeur initiale
export const initialValue: StatisticsState = {
  isLoading: false,
  items: []
}
