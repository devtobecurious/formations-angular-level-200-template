import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'projects/game/src/environments/api';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';

export interface GetAllGames {
  getAll(nbItems: number): Observable<GameDto[]>
}

@Injectable()
export class GameService implements GetAllGames {
  private readonly httpClient = inject(HttpClient);

  getAll(nbItems: number = 100): Observable<GameDto[]> {
    return this.httpClient.get<GameDto[]>(api.games.url + '?max=' + nbItems);
  }
}
