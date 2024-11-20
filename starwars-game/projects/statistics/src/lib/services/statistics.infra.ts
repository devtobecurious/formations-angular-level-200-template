import { inject, Injectable, isDevMode } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Statistic, Statistics } from '../models';
import { HttpClient } from '@angular/common/http';

const fakeIt = {
  getAll(): Observable<Statistics> {
    const table: Statistics = []
    return of(table).pipe(delay(1500))
  }
}

@Injectable({
  providedIn: 'root',
  useFactory: () => isDevMode() ? fakeIt : new GetAllStatisticsInfra(),
  //deps: [HttpClient]
  //useValue: fakeIt
})
export class GetAllStatisticsInfra {
  // private readonly http = inject(HttpClient)

  getAll(): Observable<Statistics> {
    throw new Error('not implemented exception')
  }
}

@Injectable({
  providedIn: 'root'
})
export class CreateOneStatisticInfra {
  addOne(item: Statistic): Observable<Statistic> {
    throw new Error('not implemented exception')
  }
}


