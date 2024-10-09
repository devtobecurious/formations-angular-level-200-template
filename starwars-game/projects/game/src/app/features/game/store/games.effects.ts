import { inject, Injectable } from "@angular/core";
import { GetAllGameInfrastructure } from "../services/game.infrastructure";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { requestToApiToGetAllGames, updateStateActionWithGamesFromApi } from "./games.actions";
import { concatMap, map } from "rxjs";

@Injectable()
export class GamesEffect {
  private readonly infra = inject(GetAllGameInfrastructure)
  private readonly actions$ = inject(Actions)

  loadGames$ = createEffect(() => this.actions$.pipe(
    ofType(requestToApiToGetAllGames),
    concatMap(action => this.infra.getAll('', 0)),
    map(items => updateStateActionWithGamesFromApi({ items }))
  ))
}
