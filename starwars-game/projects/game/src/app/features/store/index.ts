import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../../core/models/game.dto";
import { addGameInStoreAction, getAllGamesWithErrorAction, updateStateWithAllGamesAction } from "./games.actions";

// 1. Création état
export interface GamesState {
  items: GameDto[],
  isLoading ?: boolean,
  error ?: unknown
}

// 2. Avoir une donnée initiale
const initialState: GamesState = {
  items: []
}

// 3. Création du reducer
export const gamesReducer = createReducer(
  initialState,
  on(addGameInStoreAction, (state, action) => {
    const newState : GamesState = {
      items: [...state.items, action.game],
      isLoading: false
    }
    // renvoyer une nouvelle version de l'état en cours

    return newState;
  }),
  on(updateStateWithAllGamesAction, (state, action) => {
    const newState : GamesState = {
      items: [...action.games],
      isLoading: false
    }

    return newState;
  }),
  on(getAllGamesWithErrorAction, (state, action) => {
    const newState : GamesState = {
      items: state.items,
      error: new Error('erreur')
    }

    return newState;
  })
);
