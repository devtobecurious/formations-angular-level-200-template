import { createAction, props } from "@ngrx/store";
import { GameDto } from "projects/game/src/app/core/models/game.dto";

export type GameProp = {
  game: GameDto
}

export const addNewGameAction = createAction('[UI] - Add new game', props<GameProp>());
