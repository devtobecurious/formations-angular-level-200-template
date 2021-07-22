import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { enemyReducer, EnemyState } from '../features/enemy/store/reducer';

export interface ApplicationState {
  'enemies': EnemyState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  'enemies': enemyReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];
