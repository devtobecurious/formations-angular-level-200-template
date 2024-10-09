import { createAction, props } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";

export const startGameAction = createAction('[UI] - add a game in the store')

type WithGame = {
  item: GameDto
}
export const addGameAction = createAction('[UI] - add a game in the store', props<WithGame>())
