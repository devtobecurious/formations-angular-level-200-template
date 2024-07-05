import { createReducer, on } from "@ngrx/store";
import { Statistic } from "../models";
import { updateListStatisticsFromApi } from "./statistics.actions";

export interface StatisticsState {
  items: Statistic[],
  isLoading ?: boolean,
  error ?: unknown
}

const initialValue: StatisticsState = {
  items: []
}

export const statisticsReducer = createReducer(
  initialValue,
  on(updateListStatisticsFromApi, (state, action) => {
    const newState: StatisticsState = {
      items: action.items
    }
    return newState;
  })
)
