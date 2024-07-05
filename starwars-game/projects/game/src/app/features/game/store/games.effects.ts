import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GameService } from "../services/game.service";
import { addItemsFromApiAction, errorWhenGetDataFromApiAction, requestNewGamesToApiAction } from "./games.actions";
import { catchError, concatMap, map, of, tap } from "rxjs";

@Injectable()
export class GamesEffects {
  private readonly actions$ = inject(Actions);
  private readonly infra = inject(GameService);

  loadAll$ = createEffect(() => this.actions$.pipe(
    ofType(requestNewGamesToApiAction), // 1. filtre sur la bonne action
    concatMap(action => this.infra.getAll()), // 2. appel de l'api
    map(items => addItemsFromApiAction({ items }), // 3. envoie de la nouvelle action : ça fait un dispatch
    catchError(err => of(errorWhenGetDataFromApiAction({ error: err })))
  )))
}
