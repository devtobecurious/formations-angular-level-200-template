import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

export const selectState = (state:ApplicationState) => state.games;

export const selectAllGames = createSelector(selectState, state => state.items);
export const selectFilterAllGames = (filter: string) => createSelector(selectAllGames, items => items.filter(item => item.title.startsWith(filter)));
export const selectError = createSelector(selectState, state => state.error);
