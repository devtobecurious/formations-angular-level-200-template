import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

//1. Quel état dans ApplicationState
const selectGamesState = (state: ApplicationState) => state.games

//2. Je crée mes selectors
export const selectAllGames = createSelector(selectGamesState, state => state.items)
export const selectAllSuccessGames = createSelector(selectAllGames, items => items.filter(item => item.success))
