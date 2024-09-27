import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { gamesReducer, GamesState } from '../features/game/store';
import { planetsReducer, PlanetsState } from '../features/game/store/planets.store';

export interface ApplicationState {
  games:  GamesState,
  planets: PlanetsState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  games: gamesReducer,
  planets: planetsReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
