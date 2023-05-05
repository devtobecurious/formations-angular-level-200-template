import { GameService } from './../../services/game.service';
import { requestToLoadAllGamesAction, requestToLoadAllGamesSuccessAction } from './../actions/index';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, concatMap, map } from 'rxjs';
import { GameBusiness } from '../../services/game.business';
@Injectable()
export class GamesEffect {
  private readonly actions$ = inject(Actions);
  private readonly service = inject(GameService);

  listGames$ = createEffect(() => this.actions$.pipe(
    // 1. Filtrer sur l'action venant du Component
    tap(item => console.info(item)),
    ofType(requestToLoadAllGamesAction),
    tap(item => console.info(item)),
    // 2. Requête vers l'api
    concatMap(() => this.service.getAll('', 3)),
    // 3. Dispatch d'une action vers le reducer
    map(items => requestToLoadAllGamesSuccessAction({ games: items }))
  ));
}
