import { createAction, props } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";

export const startGameAction = createAction('[UI] - add a game in the store')

type WithGame = {
  item: GameDto
}
export const addGameAction = createAction('[UI] - add a game in the store', props<WithGame>())


// Tryptique : par trois elles sont toujours
// 1. La demande vers l'api (pour l'effect)
export const requestToApiToGetAllGames = createAction('[BUSINESS] - request all games')
// 2. La mise à jour de l'état (pour le reducer)

type WithGames = {
  items: GameDto[]
}
export const updateStateActionWithGamesFromApi = createAction('[EFFECT] - request all games', props<WithGames>())
// 3. Y a eu une erreur venant de l'api (pour le reducer)
