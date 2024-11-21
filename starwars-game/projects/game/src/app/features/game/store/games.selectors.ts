import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

// 1. On choisit l'état de l'application state
const selectState = (state: ApplicationState) => state.games

// 2. On va créer LES selectors
export const selectAllGames = createSelector(selectState, state => state.items)
export const selectAllSuccessGames = createSelector(selectAllGames, items => items.filter(item => item.success))
