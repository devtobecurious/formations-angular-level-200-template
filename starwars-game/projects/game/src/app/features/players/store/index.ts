import { createReducer, on } from "@ngrx/store";
import { PlayerList } from "../models/player";
import { initWithFakeDataAction } from "./players.actions";

export interface PlayersState {
  items: PlayerList
}

const initValue: PlayersState = {
  items: []
}

export const playersReducer = createReducer(
  initValue,
  on(initWithFakeDataAction, (state, action) => {
    return {
      ...state,
      items: [...action.items]
    }
  })
)
