import { ActionReducerMap } from "@ngrx/store";
import { gamesReducer, GamesState } from "../app/features/game/store";

export interface AppState {
  games: GamesState
}

export const reducers: ActionReducerMap<AppState> = {
  //router: routerReducer
  games: gamesReducer
};
