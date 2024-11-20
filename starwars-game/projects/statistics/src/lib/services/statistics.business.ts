import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statistics } from '../models';
import { GetAllStatisticsInfra } from './statistics.infra';

@Injectable({
  providedIn: 'root'
})
export class StatisticsBusiness {
  private readonly infra = inject(GetAllStatisticsInfra)

  getAll(): Observable<Statistics> {
    return this.infra.getAll().pipe(
      // ??
    )
  }
}
