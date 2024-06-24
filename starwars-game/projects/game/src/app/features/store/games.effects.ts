import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GameService } from "../game/services/game.service";
import { getAllGamesWithErrorAction, requestToGetAllGamesFromApiAction, updateStateWithAllGamesAction } from "./games.actions";
import { catchError, concat, concatMap, map, of } from "rxjs";

@Injectable()
export class GamesEffect {
  private readonly actions$ = inject(Actions)
  private readonly infra = inject(GameService)

  loadAllGamesEffect = createEffect(() => this.actions$.pipe(
    //1. je filtre sur la bonne action
    ofType(requestToGetAllGamesFromApiAction),
    // 2. je convertis mon action en données grâce à l'appel de l'api
    concatMap(action => this.infra.getAll()),
    // 3. Je convertis en une action avec les données que j'ai reçues
    map(items => updateStateWithAllGamesAction({ games: items })),
    catchError(error => of(getAllGamesWithErrorAction()))
  ), { dispatch: true })
  // ), { dispatch: false })
}
