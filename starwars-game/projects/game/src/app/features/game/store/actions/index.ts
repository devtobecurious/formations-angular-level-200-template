import { createAction, props } from "@ngrx/store";
import { Games } from "../../models";

export type ActionGamesProp = {
  games: Games
}

export const requestToLoadAllGamesAction = createAction('[GAME-UI] Request to load all games');
export const requestToLoadAllGamesSuccessAction = createAction('[GAME-EFFECT] Request to load all games success', props<ActionGamesProp>());
