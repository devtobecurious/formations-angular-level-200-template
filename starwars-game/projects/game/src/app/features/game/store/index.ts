import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";
import { addOneGame } from "./games.actions";

export interface GamesState {
  items: GameDto[],
  isLoading ?: boolean
}

export const initialValue: GamesState = {
  items: []
}

export const gamesReducer = createReducer(
  initialValue,

  on(addOneGame, (state, action) => {
    const newGames = [...state.items, action.item];
    return {
      items: newGames
    }
  })
)
