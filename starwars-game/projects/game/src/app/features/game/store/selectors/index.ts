import { createSelector } from "@ngrx/store";
import { ApplicationState } from "projects/game/src/app/reducers";

// Une fois par fichier selectors/index.ts
export const versMonEtatDeGames = (state: ApplicationState) => state.games;

// Ici ce sont LES selectors
export const toutesLesPartiesQuery = createSelector(versMonEtatDeGames, gameState => gameState.items);
export const partiesEchoueesQuery = createSelector(toutesLesPartiesQuery, items => items.filter(item => !item.success));

