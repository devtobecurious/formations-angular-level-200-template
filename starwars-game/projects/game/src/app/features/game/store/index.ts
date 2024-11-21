import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";
import { addGameToStoreAction, endGameAction } from "./games.actions";

export interface GamesState {
  items: GameDto[]
}

const initialValue: GamesState = {
  items: []
}

export const gamesReducer = createReducer(
  initialValue,
  on(addGameToStoreAction, (oldState, action) => {
    const newState: GamesState = {
      items: [...oldState.items, action.item]
    }

    return newState
  }),

  on(endGameAction, (oldState, action) => {
    const gameToBeStopped = oldState.items.filter(item => item.id === action.id)

    const gameToUpdate = {...gameToBeStopped[0]}
    gameToUpdate.success = true

    const newState: GamesState = {
      items: [...oldState.items.filter(item => item.id !== action.id), gameToUpdate]
    }

    return newState
  })
)
