import { createAction, props } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";

export type WithGame = {
  item: GameDto
}
export const addGameToStoreAction = createAction('[UI] - add a game in the store', props<WithGame>())

export type WithId = {
  id: number
}
export const endGameAction = createAction('[UI] - Stop the current gamer with an id', props<WithId>())
