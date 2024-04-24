import { createSelector } from "@ngrx/store";
import { ApplicationState } from ".";

//1. Une seule fois par fichier
const selectState = (globalState: ApplicationState) => globalState.games;


//2. Je vais créer de 1 à N selectors
export const selectAllGames = createSelector(selectState, state => state.items);
export const selectGamesAlreadyAdded = createSelector(selectAllGames, items => items.filter(item => item.id > 0));
