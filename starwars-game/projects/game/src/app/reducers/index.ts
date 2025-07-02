import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { gamesReducer, GamesState } from '../features/game/store';
import { gamerReducer, GamerState } from '../features/gamer/store';

export interface ApplicationState {
    games: GamesState,
    gamer: GamerState
}


export const reducers: ActionReducerMap<ApplicationState> = {
  games: gamesReducer,
  gamer: gamerReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
