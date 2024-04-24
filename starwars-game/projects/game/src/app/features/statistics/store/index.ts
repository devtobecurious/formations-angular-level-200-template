import { createReducer, on } from "@ngrx/store";
import { Statistics } from "../models";
import { addNewStatAction, updateStateFromApiStatsAction } from "./statistics.actions";

export interface StatisticsState {
  items: Statistics
}

const initialState: StatisticsState = {
  items: []
};

export const statisticsReducer = createReducer(
  initialState,
  on(addNewStatAction, (state, action) => {
    const newState: StatisticsState = {
      items: [...state.items, action.item]
    }

    return newState;
  }),

  on(updateStateFromApiStatsAction, (state, action) => {
    const newState: StatisticsState = {
      items: [...action.items]
    }

    return newState;
  })
);
