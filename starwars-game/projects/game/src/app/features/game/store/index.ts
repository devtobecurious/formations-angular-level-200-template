import { createReducer, on } from "@ngrx/store";
import { Games } from "../models";
import { requestToLoadAllGamesSuccessAction } from "./actions";

export interface GamesState {
  items: Games;
}

const initialState: GamesState = {
  items: []
}

export const gamesReducer = createReducer(initialState,
  // on(requestToLoadAllGamesSuccessAction, (state, action) => {
  //   const stateBis = { ...state };

  //   stateBis.items = action.games;

  //   return stateBis;
  // })
  on(requestToLoadAllGamesSuccessAction, (state, action) => ({ ...state, items: action.games }))
);
