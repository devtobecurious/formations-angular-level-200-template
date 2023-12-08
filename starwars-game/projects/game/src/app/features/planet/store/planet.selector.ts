import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

// 1. Je dis l'état qui m'intéresse dans ApplicationState
export const selectState = (state: ApplicationState) => state.planets;

// 2. Je construis mes selectors
export const selectAllPlanetsSelector = createSelector(selectState, (localState) => localState.items);
export const selectAllPlanetsLabasSelector = createSelector(selectState, (localState) => localState.items.filter(item => item.systemSolar === 'labas'));
