import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'projects/game/src/environments/api';
import { Observable, retry } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';

export interface GetAllInfrastructure<T> {
  getAll(filter: string, nbItems: number): Observable<T[]>;
}

@Injectable({providedIn: 'root'})
export class GetAllGameInfrastructure implements GetAllInfrastructure<GameDto> {

  constructor(private httpClient: HttpClient) { }

  getAll(filter: string, nbItems: number = 100): Observable<GameDto[]> {
    return this.httpClient.get<GameDto[]>(api.games.url + '?max=' + nbItems + '&filter=' + filter)
                          .pipe(retry(2));
  }
}
