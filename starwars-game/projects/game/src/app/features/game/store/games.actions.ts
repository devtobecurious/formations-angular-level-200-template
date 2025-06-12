import { createAction, props } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";

type WithGame = {
  item: GameDto
}

export const addOneGame = createAction('[UI] - Add new Game', props<WithGame>())
