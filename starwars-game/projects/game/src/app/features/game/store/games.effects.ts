import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GameService } from "../services/game.service";
import { map, switchMap } from "rxjs";
import { requestToGetListOfGamesAction, setListGamesAction } from "./games.actions";

export class GamesEffect {
  private readonly actions$ = inject(Actions)
  private readonly service = inject(GameService)

  loadGames$ = createEffect(() => this.actions$.pipe(
    ofType(requestToGetListOfGamesAction),
    switchMap(item => this.service.getAll('', 0)),
    map(items => setListGamesAction({ items }))
  ))
}
