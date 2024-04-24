import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

//1. Quel état ?
const selectState = (container: ApplicationState) => container.statistics;

// 2. Création des selectors
export const selectAllStats = createSelector(selectState, state => state.items);
export const selectAllStatsSuccess = createSelector(selectAllStats, items => items.filter(item => item.nbGagnees > 0));
