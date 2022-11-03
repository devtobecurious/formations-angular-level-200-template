import { createSelector } from '@ngrx/store';
import { ApplicationState } from './../../../../reducers/index';

export const selectionSousEtatStats = (applicationState: ApplicationState) => applicationState.statistics;


export const selectAllStatistics = createSelector(
  selectionSousEtatStats,
  state => state.items
);
