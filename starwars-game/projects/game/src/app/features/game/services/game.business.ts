import { inject, Injectable } from '@angular/core';
import { GetAllGameInfrastructure } from './game.service';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { selectAllGames } from '../store/games.selectors';
import { requestToGetAllGamesAction } from '../store/games.actions';

@Injectable({
  providedIn: 'root'
})
export class GameBusiness {
  // private readonly infra = inject(GetAllGameInfrastructure);
  private readonly store = inject(Store<ApplicationState>);

  init(): void {
    this.store.dispatch(requestToGetAllGamesAction());
  }

  getAll(): Observable<GameDto[]> {
    return this.store.pipe(
      select(selectAllGames)
    )
  }
}
