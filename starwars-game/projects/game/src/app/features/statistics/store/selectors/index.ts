import { createSelector } from "@ngrx/store";
import { ApplicationState } from "projects/game/src/app/reducers";

// A faire qu'une fois par fichier selector
export const selectionDeLEtatConcerne = (state: ApplicationState) => state.statistics;

// A faire autant de fois qu'on a besoin de selectors
export const selectAllStatistics = createSelector(selectionDeLEtatConcerne,
                                                 state => state.items);

export const selectStatisticsFrom2007 = createSelector(selectionDeLEtatConcerne,
                                state => state.items.filter(item => item.year >= 2007));
