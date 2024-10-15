import { inject, Injectable } from '@angular/core';
import { Statistics } from './models';
import { StatisticsInfra } from './statistics.infrastructure';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsBusiness {
  private readonly infra = inject(StatisticsInfra)

  getFailures(): Observable<number[]> {
    return this.getAll().pipe(
      map(items => items.map(item => item.nbFailed))
    )
  }

  getAll(): Observable<Statistics> {
    return this.infra.getAll().pipe(
      filter(items => items.length > 0), // le component ne recevra aucun tableau vide !
      map(items => {
        const result = items.filter(item => item.year == (new Date()).getFullYear())
        return result
      })
    )
  }
}
