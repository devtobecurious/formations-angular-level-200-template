import { createAction, props } from "@ngrx/store"
import { GameDto } from "../../../core/models/game.dto"

export type WithGame = {
  item: GameDto
}

export const addNewGameAction = createAction('[UI] - Add a new game in store', props<WithGame>())
