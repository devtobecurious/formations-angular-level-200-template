import { Injectable } from '@angular/core';
import { GetAllStatsInfraService } from './get-all-stats-infra.service';
import { inject } from '@angular/core';
import { GetAllStatsContract } from './get-all-stats.contract';
import { Observable, shareReplay, filter } from 'rxjs';
import { StatItemList } from '../models/stat-item';

@Injectable({
  providedIn: null
})
export class GetAllStatsBusinnessService implements GetAllStatsContract {
  private readonly getAllStatsInfraService = inject(GetAllStatsInfraService);
  private readonly cache$: Observable<StatItemList> = this.getAllStatsInfraService.getAll().pipe(
    filter((data) => data.length > 0),
    shareReplay(1)
  );

  getAll(): Observable<StatItemList> {
    return this.cache$;
  }
}
