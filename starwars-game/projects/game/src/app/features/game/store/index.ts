import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";
import { getErrorAction, updateStoreWithGamesFromApiAction } from "./games.actions";

// 1. Etat
export interface GamesState {
  items: GameDto[],
  state: 'idle' | 'pending' | 'done',
  error ?: unknown
}

// 2. initial
const initialState: GamesState = {
  items: [],
  state: 'idle'
}

// 3. reducer
export const gamesReducer = createReducer(
  initialState,
  on(updateStoreWithGamesFromApiAction, (state, action) => {
    const newState: GamesState = {
      items: [...state.items],
      state: 'done'
    }
    return newState;
  }),
  on(getErrorAction, (state, action) => {
    const newState: GamesState = {
      items: state.items,
      state: 'pending',
      error: action.error
    }

    return newState;
  })
)
