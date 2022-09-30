import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { StatisticsState, statReducer } from '../features/stats/store/reducers';

export interface ApplicationState {
  statistics: StatisticsState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  statistics: statReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];
