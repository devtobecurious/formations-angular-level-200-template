import { createAction, props } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";

export const addNewGameAction = createAction('[UI] - add new game in array')

export const requestGamesToWebApi = createAction('[UI] - request games to web api')
export const setGamesListAction = createAction('[API] - set games list', props<{ items: GameDto[] }>())
/*
{
    type: [UI] ....,
    item: { .....}
}
*/

type GameProp = {
    item: Omit<GameDto, 'id'>
}

export const addNewGameFromUIAction = createAction('[UI] - add new game from form', props<GameProp>())
