import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { gamesReducer, GamesState } from '../features/game/store';
import { statisticsReducer, StatisticsState } from '../features/statistics/store';

export interface ApplicationState {
  games: GamesState,
  statistics: StatisticsState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  games: gamesReducer,
  statistics: statisticsReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
