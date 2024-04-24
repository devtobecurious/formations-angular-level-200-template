import { createAction, props } from "@ngrx/store";
import { GameDto } from "../core/models/game.dto";

export type GameToAddType = {
  game: GameDto,
  autreAttribut: string
}
export const addNewGameCommand = createAction('[UI] - Add new game in state', props<GameToAddType>());
