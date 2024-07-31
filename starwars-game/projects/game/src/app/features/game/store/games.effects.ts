import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetAllGameInfrastructure } from "../services/game.service";
import { requestToGetAllGamesAction, updateStoreWithGamesFromApiAction } from "./games.actions";
import { map, switchMap } from "rxjs";

@Injectable()
export class GamesEffects {
  private readonly actions$ = inject(Actions);
  private readonly infra = inject(GetAllGameInfrastructure);

  loadAll$ = createEffect(() => this.actions$.pipe(
    ofType(requestToGetAllGamesAction),
    switchMap(() => this.infra.getAll('')),
    map((allGames) => updateStoreWithGamesFromApiAction({items: allGames}))
  ))
}
