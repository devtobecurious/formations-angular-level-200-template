import { inject, Injectable } from '@angular/core';
import { Statistics } from './models';
import { StatisticsInfra } from './statistics.infrastructure';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsBusiness {
  private readonly infra = inject(StatisticsInfra)

  getAll(): Observable<Statistics> {
    return this.infra.getAll()
  }
}
