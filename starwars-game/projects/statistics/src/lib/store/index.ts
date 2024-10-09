import { createReducer, on } from "@ngrx/store";
import { Statistics } from "../models";
import { addStatListAction } from "./stats.actions";

export interface StatisticsState {
  items: Statistics
}

const initValue: StatisticsState = {
  items: []
}

export const statsReducer = createReducer(
  initValue,
  on(addStatListAction, (state, action) => {
    const newState = {...state}

    newState.items.push(...action.items)

    return newState
  })
)
