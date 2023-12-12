import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'projects/game/src/environments/api';
import { Observable, filter, of, share, shareReplay } from 'rxjs';
import { ValueOrUndefined } from 'search';
import { GameDto, Games } from '../models';
import { environment } from 'projects/game/src/environments/environment';

export interface GetAllGames {
  getAll(searchValue: ValueOrUndefined<string>, nbItems: number): Observable<Games>
}

const mockService: GetAllGames = {
  getAll(searchValue: ValueOrUndefined<string>,
    nbItems: number = 100): Observable<Games> {
    return of([{ id: 1, title: 'Yeahh AC réussi', success: true } as GameDto]);
  }
}

const factoryService = () => environment.production ? new GetAllGameService(inject(HttpClient)) : mockService;

@Injectable({
  providedIn: 'root',
  //useFactory: factoryService
  // useValue: mockService
})
export class GetAllGameService implements GetAllGames {
  private games$ !: Observable<Games>;

  constructor(private httpClient: HttpClient) { }

  getAll(searchValue: ValueOrUndefined<string>, nbItems: number = 100): Observable<Games> {
    let valueToSend = '&search=';

    if (typeof searchValue !== 'undefined' && searchValue !== null) {
      valueToSend = '&search=' + searchValue;
    }

    if (typeof this.games$ === 'undefined') {

      this.games$ = this.httpClient.get<Games>(api.games.url + '?max=' + nbItems).pipe(
        shareReplay(1),
        filter(items => typeof items !== 'undefined' && items !== null),
      );
    }

    return this.games$;
  }
}
