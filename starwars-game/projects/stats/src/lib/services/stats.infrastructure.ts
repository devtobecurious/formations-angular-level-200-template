import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { StatList } from '../models/statistic';

@Injectable()
export class StatsInfrastructure {
  getAll(): Observable<StatList> {
    const table: StatList = [
      {
        year: 2022,
        month: 4,
        nbSuccess: 3,
        nbFailed: 1
      },
      {
        year: 2023,
        month: 3,
        nbSuccess: 2,
        nbFailed: 1
      },
      {
        year: 2023,
        month: 2,
        nbSuccess: 1,
        nbFailed: 1
      },
      {
        year: 2024,
        month: 1,
        nbSuccess: 2,
        nbFailed: 1
      }
    ]

    return of(table).pipe(delay(1500))
  }
}
