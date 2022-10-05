import { createSelector } from "@ngrx/store";
import { ApplicationState } from "projects/game/src/app/reducers";

export const selectExpectedState = (state: ApplicationState) => state.statistics;

export const selectAllStatistics = createSelector(selectExpectedState, state => state.items);
