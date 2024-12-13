import { createReducer, on } from "@ngrx/store"
import { Statistics } from "../models"
import { addStatsAction } from "./statistics.actions"

export interface StatisticsState {
  isLoading?: boolean
  error?: unknown
  items: Statistics
}

const initValue: StatisticsState = {
  items: []
}

export const statisticsReducer = createReducer(
  initValue,
  on(addStatsAction, (lastVersionState, action) => {
    const items = [...lastVersionState.items, ...action.items]
    return {...lastVersionState, items }
  })
)
