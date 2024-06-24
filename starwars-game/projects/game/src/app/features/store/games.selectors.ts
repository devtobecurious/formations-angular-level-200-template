import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../reducers";

// 1. Dire dans mon store, quel est l'état concerné
const selectState = (state: ApplicationState) => state.games;


// 2. Choisir les données de mon état
export const selectAllGamesSelector = createSelector(selectState, state => state.items);
export const selectAllSuccessGamesSelector = createSelector(selectAllGamesSelector, items => items.filter(item => item.success));
export const isLoadingSelector = createSelector(selectState, state => state.isLoading);
