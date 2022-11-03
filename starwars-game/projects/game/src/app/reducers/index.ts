import { StatisticsState, statsReducer } from './../features/stats/store/reducers/index';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface ApplicationState {
  statistics: StatisticsState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  statistics: statsReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];
