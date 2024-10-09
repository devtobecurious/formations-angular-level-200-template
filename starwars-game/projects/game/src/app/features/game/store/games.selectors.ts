import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

// 1. je dis quel état de l'application state m'intéresse
const selectState = (state: ApplicationState) => state.games

// 2. je crée MES selectors
export const selectAllGames = createSelector(selectState, state => state.items)
export const selectAllSuccesGames = createSelector(selectAllGames, items => items.filter(item => item.success)) // mémoizé
