import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { gamesReducer, GamesState } from '../features/game/store';
import { playersReducer, PlayersState } from '../features/players/store';

export interface ApplicationState {
  games: GamesState,
  players: PlayersState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  games: gamesReducer,
  players: playersReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
