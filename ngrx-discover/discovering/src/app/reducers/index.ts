import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { statisticsReducer, StatisticsState } from '../features/statistics/store';

export interface ApplicationState {
  statistics: StatisticsState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  statistics: statisticsReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
