import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetAllGameService } from "../services/game.service";
import { errorLoadedGames, requestToLoadGames, successLoadedGames } from "./games.actions";
import { catchError, concatMap, map, of } from "rxjs";

@Injectable()
export class GamesEffect {
  private readonly actions$ = inject(Actions);
  private readonly infra = inject(GetAllGameService);

  loadGames$ = createEffect(() => this.actions$.pipe(
    ofType(requestToLoadGames), // filtre pour ne garder que les actions de type requestToLoadGames
    concatMap(action => this.infra.getAll(undefined)), // concatMap permet de retourner un observable à partir d'un autre observable
    map(games => successLoadedGames({ games })),
    catchError(error => of(errorLoadedGames({ error })))
  ))
}
