import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

// 1. (unique) Choisis l'état parmi les états possibles dans ApplicationState
export const selectGameState = (main: ApplicationState) => main.games;


// 2. On peut avoir de 1 à N selectors
export const selectGames = createSelector(selectGameState, (state) => state.list);
export const selectGamesSuccess = createSelector(selectGames, (items) => items.filter((item) => item.success));
