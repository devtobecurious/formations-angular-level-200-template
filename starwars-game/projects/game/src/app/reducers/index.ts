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
  games: GamesState,
  // trees: TreesState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  games: gamesReducer,
  //trees: treesReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
