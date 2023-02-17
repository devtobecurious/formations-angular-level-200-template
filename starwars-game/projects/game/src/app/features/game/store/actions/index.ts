import { createAction, props } from "@ngrx/store";
import { GameDto } from "projects/game/src/app/core/models/game.dto";

export type GameContainerForProp = {
  item: GameDto
}
export const addGameAction = createAction('UI - Add new game', props<GameContainerForProp>());
