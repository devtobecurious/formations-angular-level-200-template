import { createReducer } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";

export interface GamesState {
  games: GameDto[],
  isLoading ?: boolean
}

export const initialValue: GamesState = {
  games: []
}

export const gamesReducer = createReducer(
  initialValue
)
