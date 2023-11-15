import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'projects/game/src/environments/api';
import { Observable, of } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { environment } from 'projects/game/src/environments/environment';

export interface GetAllGame {
  getAll(nbItems: number): Observable<GameDto[]>;
}

const inMemoryInstance: GetAllGame = {
  getAll: (nbItems: number): Observable<GameDto[]> => {
    return of([]);
  }
}

const factoryServiceInfra = () => environment.production ? new GameInfra() : inMemoryInstance;

@Injectable({
  providedIn: 'root',
  // useValue: inMemoryInstance // instance unique
  useFactory: factoryServiceInfra
})
export class GameInfra implements GetAllGame {
  private readonly httpClient = inject(HttpClient);

  getAll(nbItems: number = 100): Observable<GameDto[]> {
    // return this.httpClient.get<GameDto[]>(api.games.url + '?max=' + nbItems);
    throw new Error('Not implemented');
  }
}
