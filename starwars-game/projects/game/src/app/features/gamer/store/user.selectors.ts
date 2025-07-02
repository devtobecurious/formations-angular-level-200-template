import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

export const selectProfilGamer = createSelector((state: ApplicationState) => state.gamer, state => state.item)
export const isPegi13 = createSelector(selectProfilGamer, gamer => gamer ? gamer.age > 13 : false)
export const isLoading = createSelector((state: ApplicationState) => state.gamer, state => state.isLoading)
export const isAuthenticated = createSelector(selectProfilGamer, gamer => gamer ? gamer.status === 'connected' : false)
