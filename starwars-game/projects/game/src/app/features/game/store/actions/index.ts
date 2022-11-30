import { createAction, props } from "@ngrx/store";
import { GameDto } from "projects/game/src/app/core/models/game.dto";

export type GamePropToAction = { game: GameDto };


export const addNouvellePartieRequest = createAction('[UI] - Add new game');

export const addPartieCreeParUserRequest = createAction('[UI] - Add new user game', props<GamePropToAction>());
