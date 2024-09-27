import { inject, Injectable } from '@angular/core';
import { GetAllStatisticsInfrastructure } from './statistics.infrastructures';
import { delay, Observable, retry, switchMap } from 'rxjs';
import { Statistic, Statistics } from '../models';
import { SearchService } from 'search';

@Injectable({
  providedIn: 'root'
})
export class GetAllStatisticsBusiness {
  private readonly infra = inject(GetAllStatisticsInfrastructure);
  private readonly search = inject(SearchService);


  getAll(): Observable<Statistics> {
    return this.search.asObservable.pipe(
      switchMap(searchItem => this.infra.getAll().pipe(
        retry(2)
      ))
    )
  }
}
