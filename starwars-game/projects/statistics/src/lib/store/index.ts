import { State } from "core-libs";
import { StatisticList } from "../models/statistic";

export interface StatisticsState extends State<StatisticList> {
}

export const initialState: StatisticsState = {
  item: []
}
