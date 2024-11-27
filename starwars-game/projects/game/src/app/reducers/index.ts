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
  // user: UserState
  games: GamesState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  // user: userReducer
  games: gamesReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
