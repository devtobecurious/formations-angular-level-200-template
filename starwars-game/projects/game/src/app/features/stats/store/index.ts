import { createReducer, on } from "@ngrx/store";
import { Statistics } from "../models";
import { initStateWithFirstArrayAction } from "./statistics.actions";

export interface StatisticsState {
  statistics: Statistics;
  status: {
    value: 'idle' | 'loading' | 'loaded' | 'failed',
    message?: string
  }
}

export const initialState: StatisticsState = {
  statistics: [],
  status: { value: 'idle' }
};

export const statisticsReducer = createReducer(
  initialState,
  on(initStateWithFirstArrayAction, (state, { statistics }) => {
    const newState: StatisticsState = { ...state, statistics: statistics, status: { value: 'loaded' } };
    return newState;
  }),
)


