import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";
import { addNewGameAction } from "./games.actions";

export interface GamesState {
  items : GameDto[]
  isLoading ?: boolean
  error ?: unknown
}

export const initialValue: GamesState = {
  items: []
}

export const gamesReducer = createReducer(
  initialValue,
  on(addNewGameAction, (state, action) => {

    const newVersionOfState: GamesState = {
      items: [...state.items, action.item]
    }

    return newVersionOfState
  })
)
