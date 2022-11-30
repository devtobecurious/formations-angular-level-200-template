import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { gamesReducer, GamesState } from '../features/game/store';

export interface ApplicationState {
  games: GamesState,

}

export const reducers: ActionReducerMap<ApplicationState> = {
  games: gamesReducer,

};


export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];
