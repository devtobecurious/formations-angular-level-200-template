import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'projects/game/src/environments/api';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { StringOrUndefined } from 'search';

@Injectable()
export class GameService {

  constructor(private httpClient: HttpClient) { }

  getAll(filter: StringOrUndefined, nbItems: number = 100): Observable<GameDto[]> {
    return this.httpClient.get<GameDto[]>(api.games.url + '?max=' + nbItems);
  }
}
