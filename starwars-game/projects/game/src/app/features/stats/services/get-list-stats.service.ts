import { inject, Injectable, isDevMode } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Statistics } from '../models/statistic';
import { HttpClient } from '@angular/common/http';

export const fakeDataService = {
  getAll(): Observable<Statistics> {
    return of([{month: 5, year: 2026, nbSuccess: 1, nbFailure: 250}]).pipe(delay(1000))
  }
}

@Injectable({
  providedIn: null// 'root',
  //useValue: fakeDataService
  //useFactory: () => isDevMode() ? fakeDataService : new GetListStatsService()
})
export class GetListStatsService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<Statistics> {
    return this.http.get<Statistics>('http://lemondemagiquedestarwars.com/api/stats');
    //return of([{month: 5, year: 2026, nbSuccess: 1, nbFailure: 250}]).pipe(delay(1000))
  }
}
