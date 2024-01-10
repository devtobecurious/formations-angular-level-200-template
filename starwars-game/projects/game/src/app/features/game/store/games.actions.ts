import { createAction, props } from "@ngrx/store";
import { GameDto } from "../models";

export type OneGame = {
  game: GameDto
}
export const commandToAddGame = createAction('[UI] - Add Game', props<{ game: GameDto }>());


// Par trois elles sont toujours : La demande, la réponse et l'erreur
// La demande : effect
// La réponse : reducer
// L'erreur : reducer
export const requestToLoadGames = createAction('[BUSINESS / UI] - Load Games');
export const successLoadedGames = createAction('[EFFECT] - Loaded Games', props<{ games: GameDto[] }>());
export const errorLoadedGames = createAction('[EFFECT] - Error Loaded Games', props<{ error: any }>());
