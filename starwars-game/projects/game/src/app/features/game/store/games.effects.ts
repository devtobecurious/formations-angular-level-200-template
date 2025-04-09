import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GameService } from "../services/game.service";
import { requestGamesToWebApi, setGamesListAction } from "./games.actions";
import { concatMap, map } from "rxjs";

@Injectable()
export class GamesEffectContainer {
  private readonly actions$ = inject(Actions)
  private readonly service = inject(GameService)

  loadGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(requestGamesToWebApi), // équivalent au "on" du reducer
      concatMap(() => this.service.getAll(100)),
      map(items => setGamesListAction({ items }))
    )
  })
}
