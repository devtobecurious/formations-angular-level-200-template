import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { statsReducer, StatsState } from '../features/statistics/store';

export interface ApplicationState {
  // Games
  // Stats
  statistics: StatsState
  // Recherche
  // User connecté / pas connecté
}

export const reducers: ActionReducerMap<ApplicationState> = {
  // Games reducer
  // Stats reducer
  statistics: statsReducer
  // Recherche reducer
  // User connecté / pas connecté reducer

};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
