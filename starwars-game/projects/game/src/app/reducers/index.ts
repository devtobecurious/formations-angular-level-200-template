import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { gamesReducer, GamesState } from '../features/store';

// Aggrégateur d'état
export interface ApplicationState {
  games: GamesState
}

// Aggrégateur de reducers
export const reducers: ActionReducerMap<ApplicationState> = {
  games: gamesReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
