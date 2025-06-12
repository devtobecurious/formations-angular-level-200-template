import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

// 1. Temps 01 unique : Selection de mon sous état
const selectGamesState = (state: ApplicationState) => state.games;

// 2. Création de mes sélectors : De 1 à N
export const selectGames = createSelector(selectGamesState, (state) => state.items);
export const selectSuccessGames = createSelector(selectGames, items => items.filter(item => item.success));
