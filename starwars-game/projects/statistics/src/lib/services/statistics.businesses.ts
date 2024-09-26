import { inject, Injectable } from '@angular/core';
import { GetAllStatisticsInfrastructure } from './statistics.infrastructures';
import { delay, Observable, retry } from 'rxjs';
import { Statistic, Statistics } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GetAllStatisticsBusiness {
  private readonly infra = inject(GetAllStatisticsInfrastructure);

  getAll(filter: string): Observable<Statistics> {
    return this.infra.getAll().pipe(
      retry(2)
    );
  }
}
