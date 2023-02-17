import { createSelector } from "@ngrx/store";
import { ApplicationState } from "projects/game/src/app/reducers";

// 1. Etape : Unique => On indique sur quel état on veut travailler
export const selectState = (state: ApplicationState) => state.games;


// 2. Etape : création DES selectors
export const selectAllGames = createSelector(selectState, state => state.items);
export const selectAllSuccessGames = createSelector(selectAllGames, items => items.filter(item => item.success));
