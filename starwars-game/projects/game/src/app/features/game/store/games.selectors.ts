// En 2 temps

import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

// 1. On crée une fonction qui va choisir l'état dans ApplicationState
const selectGameState = (state: ApplicationState) => state.games

// 2. On crée un selector qui utilise cette fonction, et ramène les items (ou l'item) de cet état
export const selectAllGames = createSelector(selectGameState, state => state.items)

export const selectAllSuccessGames = createSelector(selectAllGames, items => items.filter(item => item.success))
