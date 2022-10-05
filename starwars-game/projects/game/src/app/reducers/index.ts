import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { statisticsReducer, StatisticsState } from '../features/stats/store/reducers';

export interface ApplicationState {
  statistics: StatisticsState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  statistics: statisticsReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];
