import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { gamesReducer, GamesState } from '../features/game/store';
import { SpeciesState, speciesToGamesReducer } from '../features/game/store/species.reducer';

export interface ApplicationState {
  // user: UserState
  games: GamesState,
  speciesToGames: SpeciesState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  // user: userReducer
  games: gamesReducer,
  speciesToGames: speciesToGamesReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
