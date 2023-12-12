import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'projects/game/src/environments/api';
import { Observable } from 'rxjs';
import { ValueOrUndefined } from 'search';
import { Games } from '../models';

@Injectable()
export class GameService {

  constructor(private httpClient: HttpClient) { }

  getAll(searchValue: ValueOrUndefined<string>, nbItems: number = 100): Observable<Games> {
    return this.httpClient.get<Games>(api.games.url + '?max=' + nbItems);
  }
}
