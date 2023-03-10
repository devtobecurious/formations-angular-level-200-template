import { createSelector } from "@ngrx/store";
import { ApplicationState } from "projects/game/src/app/reducers";

// 1. A ne faire qu'une seule fois => choisir l'état dans ApplicationState
export const selectState = (state: ApplicationState) => state.games;

// 2. Construction de N selectors
export const selectAllGamesSelector = createSelector(selectState, gameState => gameState.items);
export const selectSuccessGamesSelector = createSelector(selectAllGamesSelector, items => items.filter(item => item.success));
