import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { gamesReducer, GamesState } from '../features/game/store';
import { StatisticsState, statsReducer } from 'projects/statistics/src/lib/store';

export interface ApplicationState {
  games: GamesState,
  statistics: StatisticsState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  games: gamesReducer,
  statistics: statsReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
