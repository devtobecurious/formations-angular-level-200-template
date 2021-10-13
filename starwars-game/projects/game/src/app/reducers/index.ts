import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { EnemyState } from '../features/enemy/store/reducers';
import * as enemies from '../features/enemy/store/reducers';


export interface ApplicationState {
  enemies: EnemyState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  enemies: enemies.reducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];
