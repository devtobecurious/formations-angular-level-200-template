import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";
import { addNewGameAction } from "./games.actions";

// Je déclare la structure de mon état
export interface GamesState {
  items: GameDto[],
  itemsDraft?: GameDto[]
}

// J'initialise mon état
const initialValue: GamesState = {
  items: []
}

// Je crée mon reducer
export const gamesReducer = createReducer(
  initialValue,
  on(addNewGameAction, (state, action) => {
    const newState: GamesState = {
      items: [...state.items]
    }
    newState.items.push(action.game)
    // renvoyer une nouvelle version de l'état
    return newState
  })
)
