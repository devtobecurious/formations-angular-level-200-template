import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

export const selectState = (state: ApplicationState) => state.stats;

export const selectAllStats = createSelector(
  selectState,
  (state) => state.statistics
);

export const selectStatusFromStatisticsState = createSelector(
  selectState,
  (state) => state.status
);
