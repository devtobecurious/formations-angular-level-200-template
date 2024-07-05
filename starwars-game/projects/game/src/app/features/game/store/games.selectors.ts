import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

// 1. Dire dans ApplicationState quel état est concerné pour nos selectors
const selectStateInApplicationState = (appState: ApplicationState) => appState.games;

// 2. Création de NOS selectors
export const selectAllItemsSelector = createSelector(selectStateInApplicationState,
                                                    state => state.items);

export const selectAllSuccessGamesSelector = createSelector(selectAllItemsSelector,
                                                            items => items.filter(item => item.success))

export const withErrorRequestApiSelector = createSelector(selectStateInApplicationState, state => state.error !== undefined)
