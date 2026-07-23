import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { StatItemList } from '../models/stat-item';
import { Observable, retry } from 'rxjs';
import { GetAllStatsContract } from './get-all-stats.contract';

@Injectable({
  providedIn: null
})
export class GetAllStatsInfraService implements GetAllStatsContract {
  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<StatItemList> {
    return this.httpClient.get<StatItemList>('/api/stats').pipe(
      retry({ count: 3, delay: 1000 })
    );
  }
}
