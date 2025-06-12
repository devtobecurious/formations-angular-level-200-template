import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

export const selectPlayersState = (state: ApplicationState) => state.players;

export const selectAllPlayers = (date: Date) => createSelector(selectPlayersState, (state) => state.items);
export const selectAllPlayersWithOneGame = createSelector(selectPlayersState, (state) => state.items.filter(item => item.games && item.games.length > 0));
