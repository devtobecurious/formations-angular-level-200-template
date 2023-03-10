import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { gamesReducer, GameState } from '../features/game/store';

export interface ApplicationState {
  games: GameState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  games: gamesReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
