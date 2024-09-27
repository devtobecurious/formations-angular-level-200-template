import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

// 1. Je choisis le sous état parmi les états de l'application state
const selectState = (app: ApplicationState) => app.games;

// 2. Je vais créer LES selectors
export const selectAllGames = createSelector(selectState, state => state.items);
export const selectAllGamesSuccess = createSelector(selectAllGames, items => items.filter(item => item.success));
