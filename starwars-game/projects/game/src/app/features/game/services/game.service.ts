import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'projects/game/src/environments/api';
import { Observable, shareReplay } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';

@Injectable()
export class BaseService<T extends { id: number }> {
  private list$ = this.httpClient.get<T[]>(api.games.url + '?max=' + 10).pipe(shareReplay(1)); // LAZY

  constructor(private readonly httpClient: HttpClient) { }

  getAll(nbItems: number = 100): Observable<T[]> {
    return this.list$
  }
}

@Injectable()
export class GameService extends BaseService<GameDto> {
}
