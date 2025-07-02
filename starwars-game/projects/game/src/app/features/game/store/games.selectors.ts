import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

//1. je veux cet etat dans ApplicationState
export const selectState = (state: ApplicationState) => state.games

//2. je veux creer MES selectors
export const selectAllGames = createSelector(selectState, (state) => state.items)

export const selectAllSuccessGames = createSelector(selectAllGames, items => items.filter(item => item.success))
