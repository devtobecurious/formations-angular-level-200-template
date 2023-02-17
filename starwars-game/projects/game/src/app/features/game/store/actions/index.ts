import { createAction, props } from "@ngrx/store";
import { GameDto } from "projects/game/src/app/core/models/game.dto";

export type GameContainerForProp = {
  item: GameDto
}

export type NbGamesDeleting = {
  nb: number
}

export const addGameAction = createAction('UI - Add new game', props<GameContainerForProp>());

export const deleteLastGamesAction = createAction('UI - Delete last games', props<NbGamesDeleting>());
