import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";
import { addNewGameAction } from "./games.actions";

// 1. Création de l'état des games
export interface GamesState {
  items: GameDto[]
}

// 2. Etat initial
const initialState: GamesState = {
  items: []
}

// 3. On crée le reducer
export const gamesReducer = createReducer(
  initialState,
  on(addNewGameAction, (lastVersionState, action) => {
    return {
      items : [...lastVersionState.items, action.item]
    }
  })
)
