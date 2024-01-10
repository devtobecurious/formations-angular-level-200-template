import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { gamesReducer, GamesState } from '../features/game/store';
import { statisticsReducer, StatisticsState } from '../features/stats/store';

export interface ApplicationState {
  games: GamesState,
  stats: StatisticsState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  games: gamesReducer,
  stats: statisticsReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
