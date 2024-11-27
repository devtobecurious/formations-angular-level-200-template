import { createAction, props } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";

export type WithGame = {
  item: GameDto
}
export const addNewGameAction = createAction('[UI] - Add a new game in the store', props<WithGame>())



// export type User = {
//   surname: string
// }
// export type UserJedi = User & {
//   saber: string
// }
