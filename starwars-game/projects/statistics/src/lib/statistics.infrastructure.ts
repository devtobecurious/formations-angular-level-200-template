import { Injectable, isDevMode } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Statistics } from './models';

export interface GetAll<T> {
  getAll(): Observable<T>
}

export interface GetAllStats extends GetAll<Statistics> {
}

const fakeInfra: GetAllStats = {
  getAll(): Observable<Statistics> {
    const array: Statistics = [
      {month: 4, year: 2024, nbSuccess: 10, nbFailed: 1}
    ]

    return of(array).pipe(delay(1500))
  }
}

@Injectable({
  providedIn: 'root',
  // useValue: fakeInfra // singleton
  useFactory: () => isDevMode() ? fakeInfra : new StatisticsInfrastructure()
})
export class StatisticsInfrastructure implements GetAllStats {
  getAll(): Observable<Statistics> {
    throw new Error('Method not implemented.');
  }

}
