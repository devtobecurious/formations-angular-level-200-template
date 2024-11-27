import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";
import { addNewGameAction } from "./games.actions";

// 1. On définit l'interface
export interface GamesState {
  items: GameDto[]
}

// 2. On initialise l'état au démarrage
const initState: GamesState = {
  items: []
}

// 3. On crée le reducer
export const gamesReducer = createReducer(
  initState,
  on(addNewGameAction, (oldState, action) => {
    const newVersionOfState: GamesState = {
      items: [...oldState.items, action.item] // je clone et j'append la nouvelle game
    }
    return newVersionOfState // but : créer une nouvelle version de l'état en cours
  })
)
