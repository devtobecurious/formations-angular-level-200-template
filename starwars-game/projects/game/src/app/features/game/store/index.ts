import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";
import { addGameAction, startGameAction } from "./games.actions";

// 1. state
export interface GamesState {
  items: GameDto[]
}

// 2. initial state
const initialState: GamesState = {
  items: [] // ici c'est le premier next qui est envoyé partout pour l'application
}

// 3. création du reducer
export const gamesReducer = createReducer(
  initialState,
  on(startGameAction, (state, action) => {
    // Créer une nouvelle version de l'état récupéré !
    let game: GameDto = {
      id: 0,
      success: false,
      title: 'Nouvelle partie'
    }

    const newState = {...state}
    newState.items.push(game)

    return newState // Ici le plus important : nouvelle version de l'état
  }),
  on(addGameAction, (state, action) => {
    const newState = {...state}
    newState.items.push(action.item)

    return newState // Ici le plus important : nouvelle version de l'état
  })
)

