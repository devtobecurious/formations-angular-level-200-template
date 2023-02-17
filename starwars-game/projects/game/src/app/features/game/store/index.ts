import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";
import { addGameAction } from "./actions";

// 1. Etat => un type donné
export interface GameState {
  items: GameDto[],
  // ids: number[]
}

// 2. une valeur de mon etat, initial
export const initialGameState: GameState = {
  items: []
};

// 3. reducer dédié à cet état
export const gameReducer = createReducer(
  initialGameState,

  on(addGameAction, (state, action) => {
    const cloneState: GameState = { items: [... state.items] };

    // const game: GameDto = {
    //   id: 1,
    //   success: true,
    //   title: 'Test partie'
    // };
    const game = action.item;
    cloneState.items.push(game);

    return cloneState;
  })
);
