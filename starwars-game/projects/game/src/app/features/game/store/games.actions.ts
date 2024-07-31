// actions : nommage métier

// 3 actions par demande

import { createAction, props } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";

// 1. demande (vers l'effect)
export const requestToGetAllGamesAction = createAction('[BUSINESS] - request to effect get all games')

// 2. retour de l'api (vers le reducer)
export type GetAllGames = {
  items: GameDto[]
}
export const updateStoreWithGamesFromApiAction = createAction('[EFFECT] - request to update state from web api', props<GetAllGames>())

// 3. si erreur
export type WithError = {
  error: unknown
}
export const getErrorAction = createAction('[EFFECT] - get error from web api', props<WithError>())
