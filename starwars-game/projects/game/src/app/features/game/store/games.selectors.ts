import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

// 1. Etape unique : on dit quel sous état de l'état global
const selectState = (state: ApplicationState) => state.games

// 2. Je crée MES selectors
export const selectAllGames = createSelector(selectState, state => state.items)
export const selectAllGamesSuccess = createSelector(selectAllGames, items => items.filter(item => item.success))
