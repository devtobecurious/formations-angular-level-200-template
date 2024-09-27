import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { gamesReducer, GamesState } from '../features/game/store';

export interface ApplicationState {
  games:  GamesState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  games: gamesReducer,
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
