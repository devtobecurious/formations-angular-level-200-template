import { createAction, props } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";

type AddNewGameType = {
  item: GameDto
}
export const addNewGameAction = createAction('[UI] - Add new game in store', props<AddNewGameType>());


// Par 3 elles sont
// 1. du "component" vers l'effect
// 2. de l'effect vers le store / reducer
// 3. de l'effect vers le store / reducer, pour gérer l'erreur http
type GetAllGamesType = {
  items: GameDto[]
}

type GetErrorType = {
  error: unknown
}

export const requestNewGamesToApiAction = createAction('[UI -> EFFECT] - Request to get all data from api');
export const addItemsFromApiAction = createAction('[EFFECT - REDUCER] - Gets all data and update store', props<GetAllGamesType>())
export const errorWhenGetDataFromApiAction = createAction('[EFFECT - REDUCER] - Gets http error from api', props<GetErrorType>())
