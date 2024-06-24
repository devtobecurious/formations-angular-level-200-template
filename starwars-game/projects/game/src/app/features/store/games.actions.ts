import { createAction, props } from "@ngrx/store";
import { GameDto } from "../../core/models/game.dto";

export type AddGameTypeForAction = {
  game: GameDto
};
export const addGameInStoreAction = createAction('[UI] - add new game in store', props<AddGameTypeForAction>());


/// toujours 3 actions par requete vers l'api
// 1. L'appel pour l'effect
export const requestToGetAllGamesFromApiAction = createAction('[UI] - to effect, to use with httpclient')
// 2. Le retour de l'api avec les données pour le reducer
export type AllGamesTypeForAction = {
  games: GameDto[]
};
export const updateStateWithAllGamesAction = createAction('[EFFECT] - give all games to reducer', props<AllGamesTypeForAction>())
// 3. Si erreur
export const getAllGamesWithErrorAction = createAction('[EFFECT] - catch and throw error')
