import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";
import { addNewGameCommand } from "./games.actions";

export interface GamesState {
  items: GameDto[],
  isLoading: boolean
}

const initialState: GamesState = {
  isLoading: false,
  items: []
}

export const gamesReducer = createReducer(
  initialState,
  on(addNewGameCommand, (state, action) => {
    const attr = action.autreAttribut;

    const newState: GamesState = {
      isLoading: false,
      items: [... state.items, action.game]
    }

    return newState;
  })
);
