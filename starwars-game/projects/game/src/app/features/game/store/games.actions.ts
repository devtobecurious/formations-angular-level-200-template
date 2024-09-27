import { createAction, props } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";

export type AddAction = {
  item: GameDto
}
export const addNewOneInStateAction = createAction('[UI] - add new one game', props<AddAction>())
