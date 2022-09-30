import { createSelector } from "@ngrx/store";
import { ApplicationState } from "projects/game/src/app/reducers";

export const selectorDeState = (state: ApplicationState) => state.statistics;


// Selectors utilisés dans le pipe(select()) de votre store
export const selectAllStats = createSelector(selectorDeState, state => state.items);
// export const selectNbPartiesSup102 = createSelector(selectorDeState, items => items.filter(item => item.value >= 10));
export const selectNbPartiesSup10 = createSelector(selectAllStats, items => items.filter(item => item.value >= 10));
