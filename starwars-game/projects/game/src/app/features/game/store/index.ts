import { createReducer, on } from "@ngrx/store";
import { GameDto, Games } from "../models";
import { commandToAddGame, successLoadedGames } from "./games.actions";

export type StateStatus = 'idle' | 'loading' | 'loaded' | 'error';

// 1. Déclare l'état
export interface GamesState {
  list: Games;
  status: StateStatus;
}

// 2. On initialise l'état
export const initialGamesState: GamesState = {
  list: [],
  status: 'idle'
};

// 3. On crée le reducer
export const gamesReducer = createReducer(
  initialGamesState,
  on(commandToAddGame, (state, action) => {
    const newTable = [...state.list, action.game];

    const newState: GamesState = {
      status: 'loaded',
      list: newTable
    }

    return newState;
  }),
  on(successLoadedGames, (state, action) => {
    const newTable = [...state.list, ...action.games];

    const newState: GamesState = {
      status: 'loaded',
      list: newTable
    }

    return newState;
  })
);
