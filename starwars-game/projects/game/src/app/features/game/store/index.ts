import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";
import { addNewOneInStateAction } from "./games.actions";

export interface GamesState {
  items: GameDto[]
}

const initialValue: GamesState = {
  items: []
}

export const gamesReducer = createReducer(
  initialValue,
  on(addNewOneInStateAction, (state, action) => {
    const newState = { ... state };

    newState.items.push(action.item);

    return newState;
  })
);
