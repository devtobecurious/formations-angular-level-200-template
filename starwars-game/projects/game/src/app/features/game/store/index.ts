import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";
import { addNewGameAction } from "./actions";

export interface GameState {
  items: GameDto[]
}

export const initialGameState: GameState = {
  items: []
}

export const gamesReducer = createReducer(
  initialGameState,
  on(addNewGameAction, (state, action) => {
    const items = [ ...state.items ];

    items.push(action.game);

    return { items };
  })
);
