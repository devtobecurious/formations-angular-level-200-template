import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { planetReducer, PlanetState } from '../features/planet/store';

export interface ApplicationState {
  planets: PlanetState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  planets: planetReducer,
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
