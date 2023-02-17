import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { gameReducer, GameState } from '../features/game/store';

export interface ApplicationState {
  games: GameState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  games: gameReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
