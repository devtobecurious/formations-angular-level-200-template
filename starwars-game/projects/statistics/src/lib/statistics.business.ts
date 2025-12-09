import { inject, Injectable } from '@angular/core';
import { SearchBarService } from 'search-bar';
import { StatisticsService } from './statistics.service';
import { filter, Observable } from 'rxjs';
import StatItem from './models/stat-item';

@Injectable({
  providedIn: 'root'
})
export class StatisticsBusiness {
  private readonly searchStore = inject(SearchBarService);
  private readonly rawService = inject(StatisticsService);

  private readonly stats$ = this.rawService.getAll().pipe(filter(stats => stats.length > 0));

  getAll(): Observable<StatItem[]> {
    return this.stats$;
  }
}
