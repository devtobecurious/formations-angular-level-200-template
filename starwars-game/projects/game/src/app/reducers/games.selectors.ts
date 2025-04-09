import { createSelector } from "@ngrx/store";
import { ApplicationState } from ".";

// 1. je choisis l'état
const selectChildState = (state: ApplicationState) => state.games

// 2. je crée MES sélectors
export const selectAllGamesSelector = createSelector(selectChildState,
                                                     state => state.items)

export const selectAllSucessGamesSelector = createSelector(selectAllGamesSelector,
                                                           items => items.filter(item => item.success))

export const withErrorSelector = createSelector(selectChildState, state => state.error)
export const isLoadingSelector = createSelector(selectChildState, state => state.isLoading)