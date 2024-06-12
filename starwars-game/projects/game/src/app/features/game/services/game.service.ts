import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'projects/game/src/environments/api';
import { delay, Observable, of, retry } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';

@Injectable({
  providedIn: 'root',
  useValue: {
    getAll(filter = '', nbItems: number = 100): Observable<GameDto[]> {
      let table: GameDto[] = [
        { id: 1, success: true, title: 'Abe' },
        { id: 2, success: false, title: 'Broforce' }
      ];

      if(filter) {
        table = table.filter(item => item.title.startsWith(filter))
      }

      return of(table).pipe(delay(1500))
    }
  }
})
export class GameService {

  constructor(private httpClient: HttpClient) { }

  getAll(filter = '', nbItems: number = 100): Observable<GameDto[]> {
    return this.httpClient.get<GameDto[]>(api.games.url + '?max=' + nbItems + '&filter=' + filter).pipe(
      retry(2)
    );
  }
}
